# playwright-evaluation

## Table of contents
- [About Project](#about-project)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Test Report](#report)


## About Project<a name="about-project"></a>
- Exploring playwright test automation tools and utilities
- Includes quick & dirty implementation for exploration & understanding purpose
- Playwright Test was created specifically to accommodate the needs of the end-to-end testing. It does everything you would expect from
  the regular test runner, and more. Playwright test allows to:
   - Run tests across all browsers.
   - Execute tests in parallel.
   - Enjoy context isolation out of the box.
   - Capture videos, screenshots and other artifacts on failure.
   - Integrate your POMs as extensible fixtures.
- playwright official doc: https://playwright.dev/


## Getting Started<a name="getting-started"></a>

### Prerequisites<a name="prerequisites"></a>
Following are the prerequisites: 

- nodejs : Download and Install Node JS from
  ```sh
  https://nodejs.org/en/download/
  ```
- Allure Reports require Java 8 or higher.
- allure commandline : Do not install, if not required to view report locally.
  Install allure command line for generating Allure Reports on local set-up using either of the following command below:
  ```sh
  npm install -g allure-commandline    
  yarn global add allure-commandline
  ```

### Installation<a name="installation"></a>

1. Clone the repo from url given below

```sh
https://github.com/navedanjum/playwright-evaluation.git
```

2. Navigate to folder and install packages using

```sh
yarn install
```

## Usage<a name="usage"></a>
1. Run Single test file using using commandline from a single project/suite
```sh
yarn cross-env ENV=dev playwright test e2etests/pom/login_pom.test.ts --project=Chrome
```

2. Run with default configured worker and all projects in playwright.config.ts file
```sh
yarn cross-env ENV=dev yarn test
```
3. Run tests serially with 1 worker
```sh
yarn cross-env ENV=dev yarn test:serial
```

4. Run tests parallely with 3 workers
```sh
yarn cross-env ENV=dev yarn test:parallel
```

5. Record test script in playwright debugger, use --output option for saving recorded test
```sh
yarn test:record --output e2etests/<file_name>
```

6. Open playwright html report (Possible only if you have attached htmlReporter in playwright config file)   
```sh
If missing would need to add the following lines in  `playwright.config.ts` file
reporter: [[`html`, { outputFolder: 'html-report' }]]
```
```sh
yarn htmlReport
```

7. Open allure report
```sh
yarn allure:serve  - Generate report to temp directory
```

## Test Report<a name="report"></a>
- Test report can be availabled as github artifacts as attachment or hosted on reposity github pages like one below:
To access previous history report try https://navedanjum.github.io/playwright-evaluation/{N}/  , replace N with  build number,  1,2,3…etc
- Latest Allure report hosted on github page: https://navedanjum.github.io/playwright-evaluation/
- Access history reports example : https://navedanjum.github.io/playwright-evaluation/2

- <b>Overview</b>
  ![Overall Report Screenshot][overall-report-screenshot]

- <b>Detailed View</b>
  ![Detailed Report Screenshot][detailed-report-screenshot]

- <b>Attachment on Failure View</b>
  ![Failure Report Screenshot][failure-report-screenshot]

- <b>Test Execution History View</b>
  ![Test Execution History Screenshot][test-history-screenshot]


<!-- MARKDOWN SCREENSHOTS -->
[overall-report-screenshot]: readme-screenshots/report-overall.png
[detailed-report-screenshot]: readme-screenshots/report-detail.png
[failure-report-screenshot]: readme-screenshots/report-attachment.png
[test-history-screenshot]: readme-screenshots/test-history.png

