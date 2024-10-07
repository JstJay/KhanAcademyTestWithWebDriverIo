exports.config = {
    runner: 'local',
    path: '/wd/hub',
    specs: [
        './test/specs/**/*.js'
    ],
    capabilities: [{
        platformName: 'Android',
        'appium:platformVersion': '10.0',
        'appium:deviceName': 'Android Emulator',
        'appium:appPackage': 'org.khanacademy.android',
        'appium:appActivity': 'org.khanacademy.android.ui.library.MainActivity',
        'appium:automationName': 'UiAutomator2'
    }],
    logLevel: 'info',
    services: ['appium'],
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    }
};
