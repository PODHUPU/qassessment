require('dotenv').config()
const { TimelineService } = require('wdio-timeline-reporter/timeline-service');

exports.config = {
    protocol: 'http',
    hostname: process.env.CLOUD_SELENIUM_HOST,
    port: 80,
    path: '/wd/hub',
    specs: ['test/web/specs/*.spec.js'],
    maxInstances: 5,
    capabilities: [
        {
            maxInstances: 1,
            browserName: 'chrome',
            'goog:chromeOptions': {
                args: [
                    '--headless',
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
            maxInstances: 1,
            browserName: 'firefox',
            'moz:firefoxOptions': {
                args: [
                    '--headless',
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
    sync: true,
    logLevel: 'silent',
    coloredLogs: true,
    deprecationWarnings: true,
    bail: 0,
    baseUrl: process.env.WEB_URL,
    waitforTimeout: 30000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    framework: 'mocha',
    services: [[TimelineService]],
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
    },
    beforeSession(config, capabilities, specs) {
        capabilities['zal:name'] = specs
            .toString()
            .split('/')
            .pop()
            .replace(`.spec.js`, ``)
    },
    afterTest(test) {
        browser.setCookies([
            {
                name: 'zaleniumMessage',
                value: `${test.title}`
            },
            {
                name: 'zaleniumTestPassed',
                value: `${test.passed}`
            }]
        )
    }
}