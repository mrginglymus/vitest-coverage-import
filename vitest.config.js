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
    browser: {
      enabled: false,
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