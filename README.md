# smarthbs
handlebars with better fs support

## Availabililty
[![npm](https://push.rocks/assets/repo-button-npm.svg)](https://www.npmjs.com/package/smarthbs)
[![git](https://push.rocks/assets/repo-button-git.svg)](https://GitLab.com/pushrocks/smarthbs)
[![git](https://push.rocks/assets/repo-button-mirror.svg)](https://github.com/pushrocks/smarthbs)
[![docs](https://push.rocks/assets/repo-button-docs.svg)](https://pushrocks.gitlab.io/smarthbs/)

## Status for master
[![build status](https://GitLab.com/pushrocks/smarthbs/badges/master/build.svg)](https://GitLab.com/pushrocks/smarthbs/commits/master)
[![coverage report](https://GitLab.com/pushrocks/smarthbs/badges/master/coverage.svg)](https://GitLab.com/pushrocks/smarthbs/commits/master)
[![npm downloads per month](https://img.shields.io/npm/dm/smarthbs.svg)](https://www.npmjs.com/package/smarthbs)
[![Dependency Status](https://david-dm.org/pushrocks/smarthbs.svg)](https://david-dm.org/pushrocks/smarthbs)
[![bitHound Dependencies](https://www.bithound.io/github/pushrocks/smarthbs/badges/dependencies.svg)](https://www.bithound.io/github/pushrocks/smarthbs/master/dependencies/npm)
[![bitHound Code](https://www.bithound.io/github/pushrocks/smarthbs/badges/code.svg)](https://www.bithound.io/github/pushrocks/smarthbs)
[![TypeScript](https://img.shields.io/badge/TypeScript-2.x-blue.svg)](https://nodejs.org/dist/latest-v6.x/docs/api/)
[![node](https://img.shields.io/badge/node->=%206.x.x-blue.svg)](https://nodejs.org/dist/latest-v6.x/docs/api/)
[![JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

## Usage
Use TypeScript for best in class instellisense.

> Note: Why did we decide against a class based architecture?  
Easy: handlebars.js is already pretty determined how things are handled internally, namely a global partial template registry
It doesn't make sense to then introduce a scoped partial template approach.

```javascript
import * as smarthbs from 'smarthbs'

// read all .hbs files in a directory and any child directories and use relative path as partial string identifier
smarthbs.registerPartialDir(testPartialDir)

// read all .hbs files in a particular directory and level, output them to a destination and specify a .json file to read any referenced data
smarthbs.compileDirectory(testHbsDir, testResultDir, 'data.json')
```

[![npm](https://push.rocks/assets/repo-header.svg)](https://push.rocks)
