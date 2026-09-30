import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests/mobile',
  fullyParallel: true,
  retries: 0,
  timeout: 45_000,
  reporter: [
    ['list'],
    ['html', { open: 'always' }],
  ],
  use: {
    baseURL: 'http://127.0.0.1:4000',
    trace: 'retain-on-failure',
    video: 'retain-on-failure',
    screenshot: 'only-on-failure',
  },
  projects: [
    {
      name: 'mobile-chromium-iphone-15',
      use: {
        ...devices['iPhone 15'],
      },
    },
  ],
  webServer: {
    command: 'npm start',
    url: 'http://127.0.0.1:4000',
    reuseExistingServer: true,
    timeout: 240_000,
  },
});
