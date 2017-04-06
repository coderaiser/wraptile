# Wraptile [![License][LicenseIMGURL]][LicenseURL] [![NPM version][NPMIMGURL]][NPMURL] [![Dependency Status][DependencyStatusIMGURL]][DependencyStatusURL] [![Build Status][BuildStatusIMGURL]][BuildStatusURL]

Translate the evaluation of a function that takes multiple arguments into evaluating a sequence of 2 functions, each with a any count of arguments.

## Install

```
npm i wraptile --save
```

## How to use?

```js
const wraptile = require('wraptile');
const log = (data) => console.log(data);
const logwrap = wraptile(log);

window.addEventListener('click', logwrap('click'));
```

## Environments

In old `node.js` environments that not fully supports `es2015`, `wraptile` could be used with:

```js
var wraptile = require('wraptile/legacy');
```

## Related

- [zames](https://github.com/coderaiser/zames "zames") - converts callback-based functions to Promises and apply currying to arguments
- [currify](https://github.com/coderaiser/currify "currify") - translate the evaluation of a function that takes multiple arguments into evaluating a sequence of functions, each with a single or more arguments.


## License

MIT

[NPMIMGURL]:                https://img.shields.io/npm/v/wraptile.svg?style=flat
[BuildStatusIMGURL]:        https://img.shields.io/travis/coderaiser/wraptile/master.svg?style=flat
[DependencyStatusIMGURL]:   https://img.shields.io/gemnasium/coderaiser/wraptile.svg?style=flat
[LicenseIMGURL]:            https://img.shields.io/badge/license-MIT-317BF9.svg?style=flat
[NPMURL]:                   https://npmjs.org/package/wraptile "npm"
[BuildStatusURL]:           https://travis-ci.org/coderaiser/wraptile  "Build Status"
[DependencyStatusURL]:      https://gemnasium.com/coderaiser/wraptile "Dependency Status"
[LicenseURL]:               https://tldrlegal.com/license/mit-license "MIT License"

