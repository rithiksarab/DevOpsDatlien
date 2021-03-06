// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client: {
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },
    jasmineHtmlReporter: {
      suppressAll: true // removes the duplicated traces
    },
    coverageReporter: {
      dir: require('path').join(__dirname, './coverage/datlienDevops'),
      subdir: '.',
      reporters: [
        { type: 'html' },
        { type: 'text-summary' }
      ]
    },
    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome_no_sandbox'],
    customLaunchers: {
      Chrome_no_sandbox: {
        base: 'ChromeHeadless',
        browserDisconnectTolerance: 3,
        browserNoActivityTimeout: 300000,
        browserDisconnectTimeout: 300000,
        flags: [
          '--disable-web-security',
          '--disable-gpu',
          '--no-sandbox'
        ],
      }
    },
    singleRun: true,
    restartOnFileChange: true
  });
};
