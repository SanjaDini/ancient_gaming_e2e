const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'To2OHh',
  e2e: {
    baseUrl: ''
  },
  pageLoadTimeout: 999999,
  viewportHeight: 720,
  viewportWidth: 1280,
  // retries: 3
});
