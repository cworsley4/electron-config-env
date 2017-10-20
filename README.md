Electron Config Env
=========

Can be used inside an [Electron](https://electron.atom.io) app to use have seperate stage environment configurations. One for development and one for packaged apps in production use.

The configuration values are simple key/value pairs within .env files you specify inside your project root folder.

## Installation

    `npm install @1amgr00t/electron-config-env`

## Usage

There needs to be two .env files in your project root folder:
* __dev.env__ - development stage
* __prod.env__ - production stage

These two files should hold key/value pairs of stage specific configuration values you need. In fact, dev.env is optional, because the module will look for a prod.env file if the first is absent.

Example:

dev.env:
```bash
myVar1='a dev stage var'
myVar2='another dev stage var'
```

prod.env:
```bash
myVar1='a dev prod var'
myVar2='another dev prod var'
```

Access your config values from anywhere, the module will deliver a single instance throughout the app:
```bash
const config = require('@1amgr00t/electron-config-env');
let myVar1 = config.myVar1; 
let myVar2 = config.myVar2;
```

__Important__: Your need to ship your app with only the prod.env, otherwise dev.env will be used in your packaged app. You can do this by either simple delete dev.env or even better by ignore this file within your packager config or build script. [Electron Packager](https://github.com/electron-userland/electron-packager) for example has an --ignore option.

## Tests

    `npm test`
