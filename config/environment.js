/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'ping-pong-client',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    ENV.APP.host = "http://g5-ping-pong-84.herokuapp.com";
    ENV.contentSecurityPolicy = {
      'connect-src': 'http://g5-ping-pong-84.herokuapp.com'
    }
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    ENV.APP.host = "http://g5-ping-pong-84.herokuapp.com";
    ENV.contentSecurityPolicy = {
      'connect-src': 'http://g5-ping-pong-84.herokuapp.com'
    }
  }

  return ENV;
};
