import { defineConfig, devices } from '@playwright/test';
import {
  blobsContext,
  blobsServer,
  panelCredentials,
} from './tests/panel-environment';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: Boolean(process.env.CI),
  retries: process.env.CI ? 1 : 0,
  reporter: 'list',
  use: {
    baseURL: 'http://127.0.0.1:4173',
    trace: 'retain-on-failure',
    launchOptions: process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH
      ? { executablePath: process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH }
      : {},
  },
  projects: [
    {
      name: 'desktop',
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 1440, height: 1000 },
      },
    },
    {
      name: 'mobile',
      use: {
        ...devices['iPhone 13'],
        defaultBrowserType: 'chromium',
        deviceScaleFactor: 1,
      },
    },
  ],
  webServer: [
    {
      command: 'node tests/blobs-server.mjs',
      port: blobsServer.port,
      env: {
        BLOBS_PORT: String(blobsServer.port),
        BLOBS_TOKEN: blobsServer.token,
      },
      reuseExistingServer: !process.env.CI,
    },
    {
      command: 'pnpm start --hostname 127.0.0.1 --port 4173',
      url: 'http://127.0.0.1:4173',
      env: {
        NETLIFY_BLOBS_CONTEXT: Buffer.from(
          JSON.stringify(blobsContext),
        ).toString('base64'),
        PANEL_USERNAME: panelCredentials.username,
        PANEL_PASSWORD: panelCredentials.password,
        PANEL_SESSION_SECRET: 'segredo-de-teste',
      },
      reuseExistingServer: !process.env.CI,
      timeout: 60_000,
    },
  ],
});
