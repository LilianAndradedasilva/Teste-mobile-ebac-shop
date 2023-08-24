const {join} = require ('path')

exports.config = {
    baseUrl: '127.0.0.1',
    port: 4723,
    path: '/wd/hub',
    specs: [
        './test/specs/**/*spec.js'
    ],
    framework: 'mocha',
    capabilities:[{       
        "platformName": "Android",
        "platformVersion": "9.0",
        "deviceName": "ebac-qe",
        "automationName": "UiAutomator2",
        "app": join(process.cwd(), './app/android/Android-NativeDemoApp-0.4.0.apk'),
        "appWaitActivity": 'com.wdiodemoapp.MainActivity',

        browserName: 'microsoftedge', // or "firefox", "microsoftedge", "safari"
    }]
}