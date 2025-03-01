import {defineConfig} from "vitest/config";

export default defineConfig({
  root: 'tests',
  resolve: {conditions: ['xxx']},
  ssr: {
    // resolve: {conditions:['xxx']}
  },
  test: {
    root: '.',
    include: ['tests/**/*'],
    coverage: {
      enabled: true,
      provider: 'istanbul',
      all: true,
      include: [
        "packages/**/*.ts",
      ],
    },
    browser: {
      enabled: true,
      headless: true,
      instances: [
        {
          browser: "chromium",
        },
      ],
      provider: "playwright",
    }
  }
})