# @pushrocks/smarthbs
handlebars with better fs support

## Availabililty and Links
* [npmjs.org (npm package)](https://www.npmjs.com/package/@pushrocks/smarthbs)
* [gitlab.com (source)](https://gitlab.com/pushrocks/smarthbs)
* [github.com (source mirror)](https://github.com/pushrocks/smarthbs)
* [docs (typedoc)](https://pushrocks.gitlab.io/smarthbs/)

## Status for master
[![build status](https://gitlab.com/pushrocks/smarthbs/badges/master/build.svg)](https://gitlab.com/pushrocks/smarthbs/commits/master)
[![coverage report](https://gitlab.com/pushrocks/smarthbs/badges/master/coverage.svg)](https://gitlab.com/pushrocks/smarthbs/commits/master)
[![npm downloads per month](https://img.shields.io/npm/dm/@pushrocks/smarthbs.svg)](https://www.npmjs.com/package/@pushrocks/smarthbs)
[![Known Vulnerabilities](https://snyk.io/test/npm/@pushrocks/smarthbs/badge.svg)](https://snyk.io/test/npm/@pushrocks/smarthbs)
[![TypeScript](https://img.shields.io/badge/TypeScript->=%203.x-blue.svg)](https://nodejs.org/dist/latest-v10.x/docs/api/)
[![node](https://img.shields.io/badge/node->=%2010.x.x-blue.svg)](https://nodejs.org/dist/latest-v10.x/docs/api/)
[![JavaScript Style Guide](https://img.shields.io/badge/code%20style-prettier-ff69b4.svg)](https://prettier.io/)

## Usage

> Note: Why did we decide against a class based architecture?  
> Easy: handlebars.js is already pretty determined how things are handled internally, namely a global partial template registry
> It doesn't make sense to then introduce a scoped partial template approach.

```javascript
import * as smarthbs from 'smarthbs';

// read all .hbs files in a directory and any child directories and use relative path as partial string identifier
smarthbs.registerPartialDir(testPartialDir);

// read all .hbs files in a particular directory and level, output them to a destination and specify a .json file to read any referenced data
smarthbs.compileDirectory(testHbsDir, testResultDir, 'data.json');
```

For further information read the linked docs at the top of this readme.

> MIT licensed | **&copy;** [Lossless GmbH](https://lossless.gmbh)
| By using this npm module you agree to our [privacy policy](https://lossless.gmbH/privacy)

[![repo-footer](https://lossless.gitlab.io/publicrelations/repofooter.svg)](https://maintainedby.lossless.com)
