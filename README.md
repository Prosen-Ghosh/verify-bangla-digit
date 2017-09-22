# verify-bangla-digit

![npm](https://img.shields.io/npm/v/verify-bangla-digit.svg) ![license](https://img.shields.io/npm/l/verify-bangla-digit.svg) ![github-issues](https://img.shields.io/github/issues/Prosen-Ghosh/verify-bangla-digit.svg)  ![Circle CI build status](https://circleci.com/gh/Prosen-Ghosh/verify-bangla-digit.svg?style=svg)

Javascript package for verifying Bangla digit

![nodei.co](https://nodei.co/npm/verify-bangla-digit.png?downloads=true&downloadRank=true&stars=true)

![travis-status](https://img.shields.io/travis/Prosen-Ghosh/verify-bangla-digit.svg)
![stars](https://img.shields.io/github/stars/Prosen-Ghosh/verify-bangla-digit.svg)
![forks](https://img.shields.io/github/forks/Prosen-Ghosh/verify-bangla-digit.svg)

![forks](https://img.shields.io/github/forks/Prosen-Ghosh/verify-bangla-digit.svg)

![](https://david-dm.org/Prosen-Ghosh/verify-bangla-digit/status.svg)
![](https://david-dm.org/Prosen-Ghosh/verify-bangla-digit/dev-status.svg)

## Features


## `npm` Install

`npm install --save verify-bangla-digit`

## Browser Install

#### For Production Use
```https://cdn.rawgit.com/Prosen-Ghosh/verify-bangla-digit/2e4108c3/verify-bangla-digit.js```

#### For Development Use
```https://rawgit.com/Prosen-Ghosh/verify-bangla-digit/master/verify-bangla-digit.js```

## Dependencies

Package | Version | Dev
--- |:---:|:---:
[chai](https://www.npmjs.com/package/chai) | ^4.1.2 | ✖
[node-readme](https://www.npmjs.com/package/node-readme) | ^0.1.9 | ✖
[mocha](https://www.npmjs.com/package/mocha) | ^3.5.3 | ✔


## Usage

```javascript
const verifyDigit = require('./verify-bangla-digit');

verifyDigit("১২৩৪৫৬৭৮৯০");
//=> true


verifyDigit("");
//=> false

verifyDigit("১২৩৪৫৬৭৮৯০a");
//=> false


//<input type="text" value="১২" id="digit">
verifyDigit(document.getElementById('digit').value);
//=> true
```
## Author

Prosen Ghosh <prosenghosh25@gmail.com>

## License

 - **MIT** : http://opensource.org/licenses/MIT
