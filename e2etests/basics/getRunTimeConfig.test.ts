import test from "@playwright/test";
import config from "../../playwright.config";

test.describe('Get runtime config', () => {
    test('should return config', async({browser, browserName, baseURL, channel,}) =>{

        // Can be used for retriving runtime configuration to produce create environment.properties file
        // Retrieve below info and at the end of execution & dump it into results directory
        console.log(`BrowserType = ${browserName}`);
        console.log(`BrowserChannel = ${channel}`);
        console.log(`BaseUrl = ${baseURL}`);
        console.log(`BrowserVersion = ${browser.version()}`);
        console.log(`ParallelWorkers = ${config.workers}`);
        console.log(`Environment = ${process.env.ENV}`);

    });

});
