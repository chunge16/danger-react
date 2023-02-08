const path = require("path");
const tsconfigPaths = require("vite-tsconfig-paths");

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    '@storybook/addon-a11y',
    '@storybook/addon-coverage',
    'storybook-dark-mode',

  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-vite"
  },
  "features": {
    "storyStoreV7": true,
    "interactionsDebugger": true,
  },
  //fix alias not working  https://github.com/storybookjs/builder-vite/issues/85
  async viteFinal(config) {
    return {
      ...config,
      plugins: [...config.plugins, tsconfigPaths.default()],
    };
  },
}
