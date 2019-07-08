# qassessment

[![CircleCI])](https://circleci.com/gh/PODHUPU/qassessment/tree/master)
<img src=img/dashboard.png width=700>

This repo contains Tests for both API and Web ACs.

* __API Test framework details__ : 
    * [Axios](https://github.com/axios/axios) HTTP Client
    * [Mocha](https://mochajs.org/) Test Runner
    * [Chai](https://www.chaijs.com/) Assertion Library
    * [Mochawesome](https://www.npmjs.com/package/mochawesome) Reporter
    * Testscases - 

          Get Weather by Lattitude & Longitude
          Get Weather by PostCode

* __WEB Test Framework details__ :
    * [WebdriverIO](https://webdriver.io/) Selenium based Framework
    * [Mocha](https://mochajs.org/) Test Runner
    * [Chai](https://www.chaijs.com/) Assertion Library
    * [Wdio Timeline Reporter](https://www.npmjs.com/package/wdio-timeline-reporter) (with screenshots of each step)
    * Testscases - 

          UI Search for service center


### Instructions :

#### Pre-Reqs :

* Node
* Npm
* JDK
* Chrome
* Firefox

#### Get Started :
* One-liner clone and install -
```
git clone https://github.com/PODHUPU/qassessment.git && 
cd qassessment && 
npm install
```
* Run Both Tests -  
    * `npm run test`

* Run API Tests -  
    * `npm run apitest`

* Run WEB Tests - 
    * `npm run webtest`

## CI/CD Architecture:

Complete e2e CI/CD is accomplished using : 

* [CircleCi](https://circleci.com/gh/PODHUPU/qassessment/tree/master)
* [DockerHub](https://hub.docker.com/)

* API Tests
<img src=img/circle-ci.png width=500>

1) When user pushes code to GitHub, CircleCi workflow is triggered and executes the following workflow:
    
    * Step 1 -  creates a Docker Image of the Test Code and Pushes to DockerHub
    * Step 2 - parallel execution of a. and b.
    
        * a. executes API tests inside a docker container using the image created in Step 1 and generates Mochawesome test report and stores under Artifacts 
        * b. executes WEB tests inside a docker container using the image created in Step 1 and generates Wdio-Timeline test report and stores under Artifacts

### Reports

** WEB Chrome Report
*  View WEB Test Report - open `0-web-timeline-report.html` present under `test-results/web/` folder
<img src=img/chrome.png width=600>

** WEB Firefox Report
* View WEB Test Report - open `0-web-timeline-report.html` present under `test-results/web/` folder
<img src=img/firefox.png width=600>

** API Report
* View API Test Report - open `api-test-report.html` present under `test-results/api/` folder
<img src=img/api-results.png width=600>

### Bonus: Run the performance tests through cmd by

#### Pre-Reqs : 

* JAVA
* JMETER

1) Run performance test
    * `jmeter -n -t <JMX FILE PATH>  -JlatlonCSV=<LATLON CSV FILE PATH>  -JpostcodeCSV=<POSTCODE CSV FILE PATH> -l <DIR>/output.jtl`

Example : `jmeter -n -t performanceTests/performanceScript.jmx -JlatlonCSV=performanceTests/LatLon.csv -JpostcodeCSV=performanceTests/Postcodes.csv -l performanceTests/output.jtl`

2) To produce results use below command
    * `jmeter -g performanceTests/output.jtl -o performanceTests/html`

### Set configuration selenium grid & headless 

#### Pre-Reqs :

    *Zalenium
    *Selenium Grid
    *Docker

Instead of triggering the build from CircleCI, you can run the tests from your local machine against the Cloud hosted Dockerized Selenium Grid
Just do a 
 * RUN `npm run webtest-ci` from your local
