
# WebdriverIO Khan Academy App Automation

## Overview
This project automates the testing of the Khan Academy app using WebdriverIO and JavaScript. The tests include navigating the app, interacting with various UI elements, and verifying key functionalities.

## Prerequisites
- Node.js installed on your machine
- Appium installed globally
- Khan Academy app installed on an emulator or real device

## Tools Used
- **WebdriverIO**: JavaScript-based framework for automating mobile apps
- **Appium**: Mobile app automation framework
- **Mocha**: Testing framework used with WebdriverIO
- **Appium Inspector**: Tool to inspect elements in the app

## Setup Instructions

### Step 1: Install dependencies
```bash
npm install
```

### Step 2: Run Appium server
```bash
appium
```

### Step 3: Run the tests
```bash
npx wdio run wdio.conf.js
```

## Test Cases Automated
1. Navigating to **Financial Literacy** and verifying the last seen topic.
2. Clearing notifications.

## Project Structure
```
- test/
  - specs/
    - khanAcademyTest.js    # Contains the test scripts
- wdio.conf.js               # Configuration file for WebdriverIO
```

## References
- [WebdriverIO](https://webdriver.io/)
- [Appium](https://appium.io/)
