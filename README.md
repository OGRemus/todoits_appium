# Appium - webdriverio Bonus scenario

## Installation

1. Running `git clone <repo_link>`
1. Running `npm install`
1. Installing Appium on a local machine along with uiautomator2 driver
1. Setting up Android emulator and Android studio.
1. Java jdk and node modules installed
1. Create app folder in the rood and adding application under test apk
1. Running tests `npm run android.app`


## Configuration files

This framework uses a specific config for  Android, see wdio.android.app.conf.ts. The configs are based on a shared config
[`wdio.shared.conf.ts`](./config/wdio.shared.conf.ts).

Please check the [`wdio.shared.conf.ts`](./config/wdio.shared.conf.ts)-file for the minimal configuration options. Notes are added for why
a different value has been selected in comparison to the default values WebdriverIO provides.



## Test data

You need to create a .env file in the root where you should add:
key: - api key used for api requests
email: test user email
pass: test user password