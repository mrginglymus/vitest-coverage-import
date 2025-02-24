import {defineConfig} from "vitest/config";

export default defineConfig({
  test: {
    coverage: {
      enabled: true,
      provider: 'istanbul',
      all: true,
      include: [
        "packages/**/*.js",
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

    },
  }
})