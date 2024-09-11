const { defineConfig } = require("cypress");
const getCompareSnapshotsPlugin = require('cypress-image-diff-js/plugin');
const Mochawesome = require('cypress-mochawesome-reporter/plugin');


module.exports = defineConfig({
  e2e: {
    pageLoadTimeout: 120000, // Increase timeout to 120 seconds
    defaultCommandTimeout: 10000 ,// Increase default command timeout to 10 seconds

    setupNodeEvents(on, config) {
      Mochawesome(on);
      return getCompareSnapshotsPlugin(on, config);
    
      
      
    },
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      reportDir: 'cypress/reports/mochawesome-report',
      reportFilename: 'report',
      quiet: true,
      overwrite: false,
      html: true,
      json: true
    },
  },
});
