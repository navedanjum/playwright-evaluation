import { devices, PlaywrightTestConfig } from '@playwright/test';
import { testConfig } from './config/testConfig';
const ENV = process.env.ENV;

if (!ENV || ![`dev`, `uat`].includes(ENV)) {
  console.log(`Provide environment "cross-env ENV=dev|uat"`);
  process.exit();
}

const config: PlaywrightTestConfig = {

  //Global Setup
  globalSetup: require.resolve(`./global-setup`),

  // Look for test files in the "tests" directory, relative to this configuration file
  testDir: 'e2etests',

  // Limit the number of workers to maximum 4
  workers: 2,

  // Each test is given 180 seconds
  timeout: 180000,

  //Assertion timeout https://playwright.dev/docs/api/class-testconfig#test-config-expect
  // By default is 5000ms
  expect: {
    timeout: 15000,
  },

  //number of retries if test case fails
  retries: 0,

  //Reporters
  // https://playwright.dev/docs/test-reporters#built-in-reporters
  reporter: [[`list`],[`allure-playwright`]],

  projects: [
    // First Project config
    {
      name: `Chrome`,
      
      // Configure browser and context here
      use: {
        // Configure the browser to use.
        // browserName: `chromium`,

        //Chrome Browser Config - if you don't select channel by-default it will be chromium browser not Google chrome
        channel: `chrome`,

        ...devices['Desktop Chrome'],
       
        //Base url from user
        baseURL: testConfig[process.env.ENV],

        //Browser mode
        headless: false,

        // //Browser height and width
        viewport: { width: 1630, height: 900 },
        ignoreHTTPSErrors: true,

        //Enable File Downloads in Chrome
        acceptDownloads: true,

        //Artifacts
        screenshot: `only-on-failure`,
        video: `retain-on-failure`,
        trace: `retain-on-failure`,

        //Slows down execution by ms
        launchOptions: {
          slowMo: 0
        }
      },
    },

    // // Second Project config

    {
      name: `Firefox`,
      
      // Configure browser and context here
      use: {
        // Configure the browser to use.
        // browserName: `chromium`,

        // //Chrome Browser Config
        // channel: `chrome`,

        ...devices['Desktop Firefox'],

        //Base url from user
        baseURL: testConfig[process.env.ENV],

        //Browser mode
        headless: false,

        //Browser height and width
        viewport: { width: 1630, height: 900 },
        ignoreHTTPSErrors: true,

        //Enable File Downloads in Chrome
        acceptDownloads: true,

        //Artifacts
        screenshot: `only-on-failure`,
        video: `retain-on-failure`,
        trace: `retain-on-failure`,

        //Slows down execution by ms
        launchOptions: {
          slowMo: 0
        }
      },
    },

    // // Third project config
    {
      name: `iPhone 11`,
      
      // Configure browser and context here
      use: {
        // Configure the browser to use.
        browserName: `webkit`,

        ...devices['iPhone 11'],

        //Base url from user
        baseURL: testConfig[process.env.ENV],

        //Browser mode
        headless: false,
        ignoreHTTPSErrors: true,

        //Enable File Downloads in Chrome
        acceptDownloads: true,

        //Artifacts
        screenshot: `only-on-failure`,
        video: `retain-on-failure`,
        trace: `retain-on-failure`,

        //Slows down execution by ms
        launchOptions: {
          slowMo: 0
        }
      },
    }
  ]
};
export default config;