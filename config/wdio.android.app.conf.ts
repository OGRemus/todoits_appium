// import { join } from 'path';
// import path = require('path')
// import {config} from "./wdio.shared.conf"
// import  DesiredCapabilities  from 'webdriver';

// interface AppiumConfig {
//     port: number;
//     path: string;
//     logLevel: string;
//     android: DesiredCapabilities;
 
//   }
// // ============
// // Specs
// // ============

// config.specs = [
//     './tests/specs/**/bonusScenario.spec.ts',
// ];

// config.port = 4724
// // ============
// // Capabilities
// // ============
// // For all capabilities please check
// // http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
// config.capabilities = [
//     {
//         // The defaults you need to have in your config
//         platformName: 'Android',
//         maxInstances: 1,
//         // For W3C the appium capabilities need to have an extension prefix
//         // http://appium.io/docs/en/writing-running-appium/caps/
//         // This is `appium:` for all Appium Capabilities which can be found here
//         'appium:deviceName': 'Pixel',
//         'appium:platformVersion': '11',
//         'appium:orientation': 'PORTRAIT',
//         'appium:automationName': 'UiAutomator2',
//         'appium:newCommandTimeout': 240,
//         'appium:app': path.join(process.cwd(),'./app/todoist.apk'),
//         'appium:agentPath': "/wd/hub",
        
//         // 'appium:noReset': true,
//         // 'appium:app': 'com.todoist.activity.HomeActivity'
//     },
// ];

// exports.config = config;


import { join } from 'path';
import { config as sharedConfig } from "./wdio.shared.conf";
import  DesiredCapabilities  from 'webdriver';

interface AppiumConfig {
  port: number;
  path: string;
  logLevel: string;
  android: DesiredCapabilities;
}

const appiumConfig: AppiumConfig = {
  port: 4724,
  path: '/wd/hub',
  logLevel: 'info',
  android: {
    platformName: 'Android',
    maxInstances: 1,
    'appium:deviceName': 'Pixel',
    'appium:platformVersion': '11',
    'appium:orientation': 'PORTRAIT',
    'appium:automationName': 'UiAutomator2',
    'appium:newCommandTimeout': 240,
    'appium:app': join(process.cwd(), './app/todoist.apk'),
    'appium:agentPath': "/wd/hub",
    'appium:appActivity': 'com.todoist.activity.HomeActivity',
    'appium:appPackage': 'com.todoist',
    'appium:disableIdLocatorAutocompletion': true
  },
};

sharedConfig.specs = [
  './tests/specs/**/bonusScenario.spec.ts',
];

sharedConfig.port = appiumConfig.port;
sharedConfig.capabilities = [appiumConfig.android];

exports.config = sharedConfig;
