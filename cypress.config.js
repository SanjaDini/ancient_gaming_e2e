const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'To2OHh',
  e2e: {
    baseUrl: 'https://www.csgoroll.com/en/dice/'
  },
  pageLoadTimeout: 999999,
  viewportHeight: 720,
  viewportWidth: 1280,
  // retries: 3
});
