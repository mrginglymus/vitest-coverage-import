import {defineConfig} from "vitest/config";

export default defineConfig({
  resolve: {conditions: ['xxx']},
  test: {
    coverage: {
      enabled: true,
      provider: 'istanbul',
      all: true,
      include: [
        "packages/**/*.ts",
      ],
    },
  }
})