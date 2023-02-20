/// <reference types="Cypress" />

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "ri7ot8",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    screenshotsFolder: "cypress/screenshots",
    specPattern: "cypress/integration/examples/**",
  },
});
