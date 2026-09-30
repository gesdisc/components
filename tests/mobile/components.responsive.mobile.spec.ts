import { expect, test } from '@playwright/test';
import type { Locator, Page, Route } from '@playwright/test';

type InteractionRule = {
  selectors: string[];
  action: 'tap' | 'fill';
  scope?: 'preview' | 'page';
  fillValue?: string;
};

const TAP_CANDIDATE_LIMIT = 100;
const FILL_CANDIDATE_LIMIT = 20;
const MIN_INTERACTIVE_DIMENSION_PX = 2;

const interactiveComponentNames = new Set([
  'accordion',
  'button',
  'button-group',
  'checkbox',
  'combobox',
  'data-access',
  'data-grid',
  'date-picker',
  'date-range-slider',
  'dialog',
  'dropdown',
  'earthdata-login',
  'file-upload',
  'input',
  'login',
  'menu',
  'menu-item',
  'pagination',
  'popup',
  'radio',
  'radio-group',
  'select',
  'site-header',
  'site-navigation',
  'slider',
  'spatial-picker',
  'stepper',
  'tabs',
  'tab',
  'textarea',
  'time-average-map',
  'time-series',
  'toggle',
  'tooltip',
  'variable-combobox',
  'variable-keyword-search',
]);

// Scoped to the preview + resizer only. Deliberately excludes the sibling
// `.code-preview__source-group` (raw source markup) and `.code-preview__buttons`
// (the "Source"/"React"/"CodePen" toggle buttons), so responsiveness checks
// never measure or tap doc-page chrome instead of the component under test.
// This selector matches every code-preview block on a page (both the
// `data-flavor="html"` and `data-flavor="jupyter"` variants), so iterating
// over all matches covers every documented variant/example, not just the first.
const previewContainerSelector = '.code-preview__preview';
const defaultOverflowTolerancePx = 2;
const defaultBoundsTolerancePx = 8;
const maybeEnv = (globalThis as { process?: { env?: Record<string, string | undefined> } }).process?.env;
const parsedVisualAllowanceMultiplier = Number(maybeEnv?.MOBILE_VISUAL_ALLOWANCE_MULTIPLIER ?? '1');
const visualAllowanceMultiplier = Number.isFinite(parsedVisualAllowanceMultiplier)
  ? parsedVisualAllowanceMultiplier
  : 1;

const componentNames = [...interactiveComponentNames].sort((a, b) => a.localeCompare(b));

const harmonyMockedComponentNames = new Set(['time-average-map', 'time-series']);

const visualOverflowAllowancePx: Partial<Record<string, number>> = {
  // Keep this list intentionally minimal. Add an override only for clearly intentional horizontal scrolling.
};

const mockHarmonyJobId = 'mock-harmony-job-id';
const mockHarmonyRequestUrl =
  'https://harmony.earthdata.nasa.gov/C1234567890-TEST/ogc-api-coverages/1.0.0/collections/V1234567890-TEST/coverage/rangeset?subset=lat(-10,10)&subset=lon(-10,10)&format=text/csv';
const mockTimeSeriesCsv = [
  'title,Mock Harmony Data',
  'units,kg m-2',
  'undef,-9999',
  'Timestamp (UTC),Value',
  '2024-01-01T00:00:00.000Z,1.25',
  '2024-01-02T00:00:00.000Z,1.50',
].join('\n');

const mockHarmonyJobStatus = {
  jobID: mockHarmonyJobId,
  status: 'successful',
  message: 'Mock Harmony job completed successfully.',
  progress: 100,
  createdAt: '2024-01-01T00:00:00.000Z',
  updatedAt: '2024-01-01T00:00:01.000Z',
  dataExpiration: '2025-01-01T00:00:00.000Z',
  request: mockHarmonyRequestUrl,
  numInputGranules: 1,
  links: [
    {
      title: 'mock-timeseries.csv',
      href: 'https://example.test/mock-timeseries.csv',
      rel: 'data',
      type: 'text/csv',
    },
  ],
};

const installHarmonyMocks = async (page: Page) => {
  const capabilitiesResponse = {
    conceptId: 'C1234567890-TEST',
    shortName: 'MOCK_COLLECTION',
    summary: {
      subsetting: {
        bbox: true,
        dimension: true,
        shape: true,
        temporal: true,
        variable: true,
      },
      reprojection: {
        supported: false,
        supportedProjections: [],
        interpolationMethods: [],
      },
      averaging: {
        time: true,
        area: true,
      },
      concatenation: false,
      outputFormats: ['text/csv', 'image/tiff'],
    },
    services: [
      {
        name: 'Giovanni Time Series',
        href: 'https://example.test/services/time-series',
        capabilities: {
          subsetting: {
            temporal: true,
            variable: true,
            bbox: true,
            shape: true,
          },
          outputFormats: ['text/csv'],
          averaging: {
            time: false,
            area: false,
          },
        },
      },
      {
        name: 'Giovanni Averaging',
        href: 'https://example.test/services/averaging',
        capabilities: {
          subsetting: {
            temporal: true,
            variable: true,
            bbox: true,
            shape: true,
          },
          outputFormats: ['image/tiff', 'text/csv'],
          averaging: {
            time: true,
            area: true,
          },
        },
      },
    ],
    variables: [
      {
        conceptId: 'V1234567890-TEST',
        name: 'mock_variable',
        href: 'https://cmr.earthdata.nasa.gov/search/concepts/V1234567890-TEST',
      },
    ],
    capabilitiesVersion: '3',
    configuredOutputFormats: [
      {
        key: 'text/csv',
        label: 'CSV (point-based time series; one file)',
        description: 'Single variable plotted over time',
        isGiovanniFormat: true,
      },
      {
        key: 'image/tiff',
        label: 'GeoTIFF (time-averaged map; one file)',
        description: 'Time averaged representation as map',
        isGiovanniFormat: true,
      },
    ],
  };

  const getRequestUrl = (route: Route) => {
    return new URL(route.request().url());
  };

  const fulfillCapabilities = async (route: Route) => {
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify(capabilitiesResponse),
    });
  };

  const fulfillJobStatus = async (route: Route) => {
    const requestUrl = getRequestUrl(route);
    const pathname = requestUrl.pathname;

    if (pathname.endsWith('/jobs')) {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({
          count: 1,
          jobs: [mockHarmonyJobStatus],
          links: [],
        }),
      });
      return;
    }

    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify(mockHarmonyJobStatus),
    });
  };

  const fulfillLinkProxy = async (route: Route) => {
    await route.fulfill({
      status: 200,
      contentType: 'text/csv; charset=utf-8',
      body: mockTimeSeriesCsv,
    });
  };

  await page.route(/https:\/\/(?:harmony\.earthdata\.nasa\.gov|harmony\.uat\.earthdata\.nasa\.gov)\/capabilities(?:\?.*)?$/, fulfillCapabilities);
  await page.route(/https:\/\/(?:sjldutoe6c\.execute-api\.us-east-1\.amazonaws\.com\/default\/harmony-proxy\/capabilities)(?:\?.*)?$/, fulfillCapabilities);
  await page.route(/https:\/\/(?:harmony\.earthdata\.nasa\.gov|harmony\.uat\.earthdata\.nasa\.gov)\/jobs(?:\?.*)?$/, fulfillJobStatus);
  await page.route(/https:\/\/(?:harmony\.earthdata\.nasa\.gov|harmony\.uat\.earthdata\.nasa\.gov)\/jobs\/[^/?#]+(?:\/cancel)?(?:\?.*)?$/, fulfillJobStatus);
  await page.route(/https:\/\/sjldutoe6c\.execute-api\.us-east-1\.amazonaws\.com\/default\/harmony-proxy\/(?:jobs(?:\?.*)?|jobs\/[^/?#]+(?:\/cancel)?(?:\?.*)?|ogc-api-coverages\/.*|.*coverage\/rangeset.*)$/, fulfillJobStatus);
  await page.route(/https:\/\/lpo4uv7f0h\.execute-api\.us-east-1\.amazonaws\.com\/default\/harmony-link-proxy(?:\?.*)?$/, fulfillLinkProxy);
};

const componentInteractionRules: Record<string, InteractionRule> = {
  accordion: {
    selectors: ['terra-accordion summary', 'terra-accordion [slot="summary"]', 'terra-accordion button'],
    action: 'tap',
  },
  button: {
    selectors: ['terra-button', 'button'],
    action: 'tap',
  },
  'button-group': {
    selectors: ['terra-button-group terra-button', 'terra-button-group button'],
    action: 'tap',
  },
  checkbox: {
    selectors: ['terra-checkbox', 'terra-checkbox [role="checkbox"]'],
    action: 'tap',
  },
  combobox: {
    selectors: ['terra-combobox [role="combobox"]', 'terra-combobox input'],
    action: 'tap',
  },
  'date-picker': {
    selectors: ['terra-date-picker input', 'terra-date-picker [role="textbox"]'],
    action: 'tap',
  },
  'date-range-slider': {
    selectors: ['terra-date-range-slider [role="slider"]', 'terra-date-range-slider'],
    action: 'tap',
  },
  dialog: {
    selectors: ['terra-dialog [slot="trigger"]', 'terra-dialog button'],
    action: 'tap',
  },
  dropdown: {
    selectors: ['terra-dropdown [slot="trigger"]', 'terra-dropdown [role="button"]'],
    action: 'tap',
  },
  'earthdata-login': {
    selectors: ['terra-earthdata-login button', 'terra-earthdata-login [role="button"]'],
    action: 'tap',
  },
  'file-upload': {
    selectors: ['terra-file-upload [role="button"]', 'terra-file-upload button'],
    action: 'tap',
  },
  input: {
    selectors: ['terra-input input', 'input[type="text"]'],
    action: 'fill',
    fillValue: 'mobile test input',
  },
  login: {
    selectors: ['terra-login button', 'terra-login [role="button"]'],
    action: 'tap',
  },
  menu: {
    selectors: ['terra-menu terra-menu-item', 'terra-menu [role="menuitem"]'],
    action: 'tap',
  },
  'menu-item': {
    selectors: ['terra-menu-item', '[role="menuitem"]'],
    action: 'tap',
  },
  pagination: {
    selectors: ['terra-pagination button', 'terra-pagination [role="button"]'],
    action: 'tap',
  },
  popup: {
    selectors: ['terra-popup [slot="anchor"]', 'terra-popup button', 'terra-popup [role="button"]'],
    action: 'tap',
  },
  radio: {
    selectors: ['terra-radio', 'terra-radio [role="radio"]'],
    action: 'tap',
  },
  'radio-group': {
    selectors: ['terra-radio-group terra-radio', 'terra-radio-group [role="radio"]'],
    action: 'tap',
  },
  select: {
    selectors: ['terra-select [slot="trigger"]', 'terra-select [role="combobox"]'],
    action: 'tap',
  },
  'site-header': {
    selectors: ['terra-site-header button', 'terra-site-header [role="button"]'],
    action: 'tap',
    scope: 'page',
  },
  'site-navigation': {
    selectors: ['terra-site-navigation button', 'terra-site-navigation [role="button"]'],
    action: 'tap',
    scope: 'page',
  },
  slider: {
    selectors: ['terra-slider [role="slider"]', 'terra-slider'],
    action: 'tap',
  },
  'spatial-picker': {
    selectors: ['terra-spatial-picker terra-input input', 'terra-spatial-picker button', 'terra-spatial-picker'],
    action: 'tap',
  },
  stepper: {
    selectors: [
      'terra-stepper-step',
      'terra-stepper [role="tab"]',
      'terra-stepper a',
      'terra-stepper [part*="step"]',
      'terra-stepper',
    ],
    action: 'tap',
  },
  tab: {
    selectors: ['terra-tab', '[role="tab"]'],
    action: 'tap',
  },
  tabs: {
    selectors: ['terra-tabs [role="tab"]', 'terra-tab'],
    action: 'tap',
  },
  textarea: {
    selectors: ['terra-textarea textarea', 'textarea'],
    action: 'fill',
    fillValue: 'mobile test textarea',
  },
  'time-average-map': {
    selectors: [
      'role=button[name="Earthdata Login"]',
      'terra-time-average-map button',
      'terra-time-average-map [role="button"]',
      'terra-time-average-map',
    ],
    action: 'tap',
    scope: 'page',
  },
  'time-series': {
    selectors: [
      'role=button[name="Earthdata Login"]',
      'terra-time-series button',
      'terra-time-series [role="button"]',
      'terra-time-series',
    ],
    action: 'tap',
    scope: 'page',
  },
  toggle: {
    selectors: ['terra-toggle', 'terra-toggle [role="switch"]'],
    action: 'tap',
  },
  tooltip: {
    selectors: ['terra-tooltip [slot="trigger"]', 'terra-tooltip button', 'terra-tooltip [role="button"]'],
    action: 'tap',
  },
  'variable-combobox': {
    selectors: ['terra-variable-combobox [role="combobox"]', 'terra-variable-combobox input'],
    action: 'tap',
  },
  'variable-keyword-search': {
    selectors: ['terra-variable-keyword-search input', 'terra-variable-keyword-search [role="textbox"]'],
    action: 'fill',
    fillValue: 'temperature',
  },
};

const getVisiblePreviewContainers = (page: Page) => {
  return page
    .locator(previewContainerSelector)
    .filter({ has: page.locator(':scope > *') })
    .filter({ visible: true });
};

const tapCenter = async (page: Page, locator: Locator) => {
  try {
    await locator.scrollIntoViewIfNeeded({ timeout: 500 });
  } catch {
    // Ignore scroll failures and let bounding box checks handle non-interactable elements.
  }

  const box = await locator.boundingBox();
  if (!box) {
    return false;
  }

  await page.touchscreen.tap(box.x + box.width / 2, box.y + box.height / 2);
  return true;
};

const getFirstMatchedLocator = async (
  root: Locator,
  selectors: string[],
  maxCandidatesPerSelector: number,
  predicate: (candidate: Locator) => Promise<boolean>
) => {
  for (const selector of selectors) {
    const candidates = root.locator(selector);
    const count = await candidates.count();
    const limit = Math.min(count, maxCandidatesPerSelector);
    for (let i = 0; i < limit; i += 1) {
      const candidate = candidates.nth(i);
      if (await predicate(candidate)) {
        return candidate;
      }
    }
  }

  return null;
};

const getFirstTappableLocator = async (page: Page, root: Locator, selectors: string[]) => {
  return getFirstMatchedLocator(root, selectors, TAP_CANDIDATE_LIMIT, (candidate) => {
    return tapCenter(page, candidate);
  });
};

const getFirstFillableLocator = async (root: Locator, selectors: string[]) => {
  return getFirstMatchedLocator(root, selectors, FILL_CANDIDATE_LIMIT, async (candidate) => {
    const box = await candidate.boundingBox();
    return !!box && box.width >= MIN_INTERACTIVE_DIMENSION_PX && box.height >= MIN_INTERACTIVE_DIMENSION_PX;
  });
};

type PreviewVariant = {
  locator: Locator;
  /** Nearest preceding doc heading text (e.g. "Circle Buttons", "Sizes"), or '' for the top-of-page example before any heading. */
  label: string;
};

// Reads the section heading (h2-h4) that immediately precedes a code-preview
// block in the docs markup, so test failures can say "Circle Buttons" instead
// of an opaque index. Docs are generated as flat siblings under
// `.content__body` (heading, description paragraph(s), then `.code-preview`),
// so we walk previous siblings of the `.code-preview` wrapper until a heading
// is found. Returns '' if there's no preceding heading (the default/basic
// usage example at the top of the page, before the first "### ..." section).
const getPreviewVariantLabel = async (container: Locator): Promise<string> => {
  return container.evaluate((el) => {
    let sibling = (el.closest('.code-preview') ?? el).previousElementSibling;
    while (sibling) {
      if (/^H[1-6]$/.test(sibling.tagName)) {
        return (sibling.textContent ?? '').trim();
      }
      sibling = sibling.previousElementSibling;
    }
    return '';
  });
};

// Returns one entry per documented example/variant (Basic usage, Sizes,
// Disabled, etc.) for the component's page, so callers can check every
// variant instead of only the first code-preview block on the page.
const getComponentPreviewContainers = async (page: Page, componentName: string): Promise<PreviewVariant[]> => {
  const contentBody = page.locator('article#content .content__body').first();
  await expect(contentBody).toBeVisible();

  const tagName = `terra-${componentName}`;
  const componentMatches = contentBody.locator(tagName);
  const componentCount = await componentMatches.count();
  if (componentCount) {
    await expect(componentMatches.first()).toBeAttached();
  }

  const previewContainers = getVisiblePreviewContainers(page);
  const previewContainerCount = await previewContainers.count();
  if (previewContainerCount) {
    const containers: PreviewVariant[] = [];
    for (let index = 0; index < previewContainerCount; index += 1) {
      const locator = previewContainers.nth(index);
      containers.push({ locator, label: await getPreviewVariantLabel(locator) });
    }
    return containers;
  }

  // No code-preview block was found at all (unexpected for a documented
  // component page). Fall back to the article body so downstream assertions
  // still fail loudly instead of silently skipping the component.
  return [{ locator: contentBody, label: '' }];
};

// Measures whether `locator`'s own rendered box needs horizontal scrolling to
// show all of its content. Intentionally NOT used on individual component
// hosts: a host's scrollWidth includes its slotted light-DOM content (e.g. an
// icon sized via `font-size: 2em` inside a fixed-size circular button), which
// can exceed the host's own clientWidth without the icon ever visually
// spilling out, being clipped, or affecting layout (the host's width is fixed
// by CSS regardless of its slotted content's natural size). Called instead on
// the doc-page's `.code-preview__preview` container, which has no such fixed
// sizing quirks, so a positive result there reflects the example actually
// requiring horizontal scrolling on the page.
const getHorizontalOverflowPx = async (locator: Locator) => {
  return locator.evaluate((element) => {
    const target = element as HTMLElement;
    return Math.max(0, target.scrollWidth - target.clientWidth);
  });
};

const getPrimaryComponentLocator = (container: Locator, componentName: string) => {
  const componentTag = `terra-${componentName}`;
  return container.locator(componentTag).filter({ visible: true }).first();
};

const getFallbackVisibleTerraComponentLocator = (container: Locator) => {
  return container.locator('xpath=.//*[starts-with(local-name(), "terra-")]').filter({ visible: true }).first();
};

const getFallbackVisualTargetLocator = (container: Locator) => {
  return container.locator(':scope *').filter({ visible: true }).first();
};

const getFirstVisibleTarget = async (locators: Locator[]) => {
  for (const locator of locators) {
    if ((await locator.count()) > 0) {
      return locator;
    }
  }

  return null;
};

const verifyVisualResponsiveness = async (
  page: Page,
  container: Locator,
  componentName: string,
  variantLabel: string = componentName
) => {
  const baseOverflowAllowance = visualOverflowAllowancePx[componentName] ?? defaultOverflowTolerancePx;
  const overflowAllowance = Math.max(0, Math.floor(baseOverflowAllowance * visualAllowanceMultiplier));

  const viewportSize = page.viewportSize();
  const viewportWidth = viewportSize?.width ?? (await page.evaluate(() => window.innerWidth));

  // Prefer the exact component host, then visible Terra descendants, then any visible fallback.
  const targetComponent = await getFirstVisibleTarget([
    getPrimaryComponentLocator(container, componentName),
    getFallbackVisibleTerraComponentLocator(container),
    getFallbackVisualTargetLocator(container),
  ]);
  const targetCount = targetComponent ? 1 : 0;
  expect.soft(
    targetCount,
    `Expected a visible visual target (terra host or scoped fallback) in the visual test container for ${variantLabel}.`
  ).toBeGreaterThan(0);
  if (!targetCount || !targetComponent) {
    return;
  }

  // Measure overflow on the preview container, not the target component host:
  // a host's scrollWidth reflects its slotted content's natural size, which
  // can exceed a fixed-size host (e.g. an icon in a circular button) without
  // any real visual overflow, scrolling, or layout impact. The container has
  // no such fixed sizing, so its scrollWidth accurately reflects whether this
  // example actually requires horizontal scrolling on the page.
  const containerScrollOverflow = await getHorizontalOverflowPx(container);
  expect.soft(
    containerScrollOverflow,
    `Visible component overflow for ${variantLabel} exceeded tolerance (${overflowAllowance}px).`
  ).toBeLessThanOrEqual(overflowAllowance);

  const box = await targetComponent.boundingBox();
  expect.soft(box, `No visible bounding box for a component host in ${variantLabel} visual checks.`).not.toBeNull();
  if (!box) {
    return;
  }

  expect.soft(
    box.width,
    `${variantLabel} width exceeds viewport by more than ${defaultBoundsTolerancePx}px.`
  ).toBeLessThanOrEqual(viewportWidth + defaultBoundsTolerancePx);
  expect.soft(
    box.x,
    `${variantLabel} starts too far left of viewport.`
  ).toBeGreaterThanOrEqual(-defaultBoundsTolerancePx);
  expect.soft(
    box.x + box.width,
    `${variantLabel} extends too far right of viewport.`
  ).toBeLessThanOrEqual(viewportWidth + defaultBoundsTolerancePx);
};

const exerciseComponentBehavior = async (
  page: Page,
  previewContainers: Locator[],
  componentName: string
) => {
  if (!interactiveComponentNames.has(componentName)) {
    return;
  }

  const rule = componentInteractionRules[componentName];
  if (!rule) {
    return;
  }

  // Search every documented variant's preview container (not just the first)
  // so a variant that only renders its interactive control in a later example
  // (e.g. a "Disabled" or "With icon" section) is still exercised.
  const roots = rule.scope === 'page' ? [page.locator('body')] : previewContainers;

  if (rule.action === 'fill') {
    let field: Locator | null = null;
    for (const root of roots) {
      field = await getFirstFillableLocator(root, rule.selectors);
      if (field) {
        break;
      }
    }
    expect.soft(field, `No fillable control found for component ${componentName}`).not.toBeNull();
    if (!field) {
      return;
    }

    const value = rule.fillValue || 'mobile test';
    await field.click();
    await field.fill(value);
    await expect.soft(field).toHaveValue(value);
    return;
  }

  let tapped = false;
  for (const root of roots) {
    tapped = (await getFirstTappableLocator(page, root, rule.selectors)) !== null;
    if (tapped) {
      break;
    }
  }
  expect.soft(tapped, `No tappable control found for component ${componentName}`).toBe(true);
};

test.describe('Terra component mobile responsiveness', () => {
  test.describe.configure({ mode: 'parallel' });

  for (const componentName of componentNames) {
    test(`component ${componentName} is responsive on touch mobile`, async ({ page, isMobile }) => {
      test.skip(!isMobile, 'This suite is intended to run on a mobile device profile.');

      if (harmonyMockedComponentNames.has(componentName)) {
        await installHarmonyMocks(page);
      }

      await page.goto(`/components/${componentName}/`, {
        waitUntil: 'domcontentloaded',
      });

      await expect(page.locator('main').first()).toBeVisible();
      await expect(page.locator('article#content')).toBeVisible();
      await expect(page.locator('h1').first()).toBeVisible();

      const previewContainers = await getComponentPreviewContainers(page, componentName);

      const pageErrors: string[] = [];
      page.on('pageerror', (error) => {
        pageErrors.push(error.message);
      });

      await page.evaluate(() => {
        window.scrollBy(0, Math.min(window.innerHeight, 320));
      });

      // Use touch gestures to more closely mirror mobile interaction before probing controls.
      await page.touchscreen.tap(24, 24);
      await page.touchscreen.tap(100, 220);

      // Check every documented variant/example on the page (e.g. "Sizes",
      // "Disabled", "Outline"), not just the first code-preview block, so
      // variant-specific overflow/layout regressions are actually caught.
      // Failure messages use the doc section heading (e.g. "Circle Buttons")
      // so it's obvious which documented example is failing.
      // verifyVisualResponsiveness uses expect.soft(...) internally, so a
      // failure on one variant is recorded but does NOT throw/abort the
      // loop — every remaining variant (and exerciseComponentBehavior below)
      // still runs, and the test fails at the end with all collected
      // failures listed together instead of stopping at the first one.
      for (let index = 0; index < previewContainers.length; index += 1) {
        const { locator, label } = previewContainers[index];
        const variantLabel = label
          ? `terra-${componentName} \u2014 ${label}`
          : previewContainers.length > 1
            ? `terra-${componentName} (variant ${index + 1}/${previewContainers.length})`
            : `terra-${componentName}`;
        await verifyVisualResponsiveness(page, locator, componentName, variantLabel);
      }

      await exerciseComponentBehavior(
        page,
        previewContainers.map((variant) => variant.locator),
        componentName
      );

      const isKnownLoginComponent = componentName === 'login' || componentName === 'earthdata-login';
      const unexpectedErrors = pageErrors.filter(
        (message) => !(isKnownLoginComponent && /setImmediate/i.test(message))
      );
      expect(unexpectedErrors).toEqual([]);
    });
  }
});
