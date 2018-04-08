# eslint-plugin-nnimetz [![NPM version][npm-image]][npm-url] [![BuildStatus][travis-image]][travis-url] [![javascript style guide][standard-image]][standard-url] [![jest][jest-image]][jest-url]

[npm-image]: https://img.shields.io/npm/v/eslint-plugin-nnimetz.svg?style=flat
[npm-url]: https://www.npmjs.com/package/eslint-plugin-nnimetz
[travis-image]: https://travis-ci.org/NicolasNimetz/eslint-plugin-nnimetz.svg?branch=master
[travis-url]: https://travis-ci.org/NicolasNimetz/eslint-plugin-nnimetz
[standard-image]: https://img.shields.io/badge/code_style-standard-brightgreen.svg
[standard-url]: https://standardjs.com
[jest-image]: https://facebook.github.io/jest/img/jest-badge.svg
[jest-url]: https://github.com/facebook/jest

ESLint pluging by Nicolas Nimetz

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-nnimetz`:

```
$ yarn add eslint-plugin-nnimetz --dev
```

Or

```
$ npm install eslint-plugin-nnimetz --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-nnimetz` globally.

## Usage

Add `nnimetz` to the extends and plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "extends": [
      "standard",
      "plugin:nnimetz/recommended"
    ],
    "plugins": [
        "nnimetz"
    ]
}
```

Or you can configure the rules you want to use under the rules section after added `nnimetz` to the plugins section.

```json
{
    "extends": "standard",
    "plugins": [
        "nnimetz"
    ],
    "rules": {
        "nnimetz/rule-name": 2
    }
}
```

## Table of Contents

1. [Modules](#modules)
1. [Variables](#variables)
1. [Testing](#testing)

## Modules

<a name="modules--import"></a><a name="1.1"></a>
- [1.1](#modules--import) Import single function over a full FP library. For this use the rule `no-full-fp-lib`: more details with the [doc](./docs/rules/no-full-fp-lib.md).

```javascript
// bad
import _ from 'lodash'

// good
import { filter } from 'lodash'
```

**[⬆ back to top](#table-of-contents)**

## Variables

<a name="variables--declaration"></a><a name="2.1"></a>
- [2.1](#variables--declaration) Always use `let` or `const` to declare variables. For this, use the rule `no-var-set`: more details with the [doc](./docs/rules/no-var-set.md).

```javascript
// bad
var variable = 'hello'

// good
let variable = 'hello'
```

**[⬆ back to top](#table-of-contents)**

## Testing

<a name="testing--only"></a><a name="3.1"></a>
- [3.1](#testing--only) more details with the [doc](./docs/rules/no-spec-only.md).

```javascript
// bad
describe.only('test', () => { })

// good
describe('test', () => { })
```

**[⬆ back to top](#table-of-contents)**
