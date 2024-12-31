const { defineConfig } = require("cypress");

module.exports = defineConfig({
  watchForFileChanges: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://qa.hiring.evenhealthcare.com',
    chromeWebSecurity: false, // Allows navigation to any superdomain without cross-origin errors
  },
});
