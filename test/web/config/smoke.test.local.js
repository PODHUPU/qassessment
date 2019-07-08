require('dotenv').config()
const { TimelineService } = require('wdio-timeline-reporter/timeline-service');

exports.config = {
    specs: [
        'test/web/specs/*.spec.js'
    ],
    // Patterns to exclude.
    exclude: [
    ],
    maxInstances: 4,
    capabilities: [
        {
            maxInstances: 2,
            browserName: 'chrome',
            'goog:chromeOptions': {
                args: [
                    '--window-size=1280,1024',
                    '--start-maximized',
                    '--disable-infobars',
                    '--incognito',
                    '--ignore-certificate-errors',
                    '--disable-gpu',
                    '--no-sandbox'
                ]
            }
        },
        {
            maxInstances: 2,
            browserName: 'firefox',
            'moz:firefoxOptions': {
                args: [
                    '--window-size=1280,1024',
                    '--start-maximized',
                    '--disable-infobars',
                    '--incognito',
                    '--ignore-certificate-errors',
                    '--disable-gpu',
                    '--no-sandbox'
                ]
            }
        }
    ],
    // ===================
    // Test Configurations
    // ===================
    sync: true,
    //
    // Level of logging verbosity: silent | verbose | command | data | result | error
    logLevel: 'silent',
    //
    // Enables colors for log output.
    coloredLogs: true,
    //
    // Warns when a deprecated command is used
    deprecationWarnings: true,
    //
    // If you only want to run your tests until a specific amount of tests have failed use
    // bail (default is 0 - don't bail, run all tests).
    bail: 0,
    //
    // Saves a screenshot to a given path if a command fails.
    // screenshotPath: './errorShots/',
    //
    // Set a base URL in order to shorten url command calls. If your `url` parameter starts
    // with `/`, the base url gets prepended, not including the path portion of your baseUrl.
    // If your `url` parameter starts without a scheme or `/` (like `some/path`), the base url
    // gets prepended directly.
    baseUrl: process.env.WEB_URL,
    //
    // Default timeout for all waitFor* commands.
    waitforTimeout: 30000,
    //
    // Default timeout in milliseconds for request
    // if Selenium Grid doesn't send response
    connectionRetryTimeout: 90000,
    //
    // Default request retries count
    connectionRetryCount: 3,
    services: [[TimelineService], 'selenium-standalone'],
    //
    // Framework you want to run your specs with.
    // The following are supported: Mocha, Jasmine, and Cucumber
    // see also: http://webdriver.io/guide/testrunner/frameworks.html
    //
    // Make sure you have the wdio adapter package for the specific framework installed
    // before running any tests.
    framework: 'mocha',
    //
    // Test reporter for stdout.
    // The only one supported by default is 'dot'
    // see also: http://webdriver.io/guide/reporters/dot.html
    reporters: ['spec',
        ['timeline', {
            outputDir: './test-results/web',
            fileName: '0-web-timeline-report.html',
            embedImages: true,
            images: {
                resize: true,
                reductionRatio: 2
            },
            screenshotStrategy: 'before:click'
        }]],
    //
    // Options to be passed to Mocha.
    // See the full list at http://mochajs.org/
    mochaOpts: {
        ui: 'bdd',
        reporter: 'spec',
        compilers: ['js:babel-register'],
        timeout: 60000
    },

    before() {
        const chai = require('chai');
        global.expect = chai.expect;
        chai.Should();
        chai.use(require('chai-string'));
    }
}