# Mobile Responsiveness Tests

Playwright tests that verify every interactive Terra UI component renders and
behaves correctly on a touch mobile viewport (iPhone 15 profile). Each test
opens a component's docs page, checks every documented variant/example for
horizontal overflow and out-of-bounds elements (all failures collected and
reported together), then exercises the component with real touch input
(tap/fill). `time-average-map` and `time-series` run against mocked Harmony
API responses, so no credentials are needed.

## Prerequisites

- Node.js v22+
- Run once after cloning:
  ```sh
  npm install
  npx playwright install
  ```

---

## Running the tests

```sh
npm run test:mobile
```

The docs site is started automatically at `http://127.0.0.1:4000` (via the
`webServer` block in `playwright.config.ts`). If a server is already running
on port 4000, Playwright reuses it.

**Common flags:**

```sh
npx playwright test -g "button"         # filter by component name
npx playwright test --headed            # show the browser
npx playwright test --debug             # step through in the Inspector
npx playwright test --ui                # interactive UI mode
npx playwright test --workers=1         # run serially (default: fully parallel)
npx playwright test --repeat-each=3     # repeat to catch flakiness
npx playwright show-report              # open last HTML report
```

**Environment variables:**

| Variable | Default | Description |
|---|---|---|
| `MOBILE_VISUAL_ALLOWANCE_MULTIPLIER` | `1` | Multiplies the built-in overflow/bounds tolerances (2px / 8px). Set to e.g. `1.5` to loosen checks while tuning. |

```powershell
# PowerShell
$env:MOBILE_VISUAL_ALLOWANCE_MULTIPLIER="1.5"; npx playwright test
```

---

## Configuration

| Setting | Value |
|---|---|
| Config file | `playwright.config.ts` |
| Test directory | `./tests/mobile` |
| Project | `mobile-chromium-iphone-15` (iPhone 15 device profile) |
| Retries | 0 |
| Workers | Unlimited (fully parallel) |
| Timeout | 45s per test |
| Trace / Video | Retained on failure |
| Screenshot | Only on failure |
| Report | list + HTML (auto-opens) → `playwright-report/` |
| Base URL | `http://127.0.0.1:4000` (docs site, auto-started) |

---

## Adding a component to the suite

1. Add the component name to `interactiveComponentNames` in
   `mobile/components.responsive.mobile.spec.ts`.
2. Add an entry to `componentInteractionRules` with the CSS selectors for its
   tappable/fillable controls and the action (`tap` or `fill`).
3. Only add an entry to `visualOverflowAllowancePx` for clearly intentional
   horizontal scrolling — keep that list minimal.
