/**
 * @author: @AngularClass
 */

require('ts-node/register');
var helpers = require('./helpers');

exports.config = {
  allScriptsTimeout: 110000,

  baseUrl: 'http://localhost:3000/',
  capabilities: {
    'browserName': 'chrome',
    'chromeOptions': {
      'args': ['show-fps-counter=true'],
    },
  },

  directConnect: true,

  exclude: [],

  framework: 'jasmine2',
  jasmineNodeOpts: {
    defaultTimeoutInterval: 400000,
    includeStackTrace: false,
    isVerbose: false,
    showColors: true,
    showTiming: true,
  },

  onPrepare: function() {
    browser.ignoreSynchronization = true;
  },

  // use `npm run e2e`
  specs: [
    helpers.root('src/**/**.e2e.ts'),
    helpers.root('src/**/*.e2e.ts'),
  ],

  /**
   * Angular 2 configuration
   *
   * useAllAngular2AppRoots: tells Protractor to wait for any angular2 apps on the page instead of just the one matching
   * `rootEl`
   */
   useAllAngular2AppRoots: true,
};
