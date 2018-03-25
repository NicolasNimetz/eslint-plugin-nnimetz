# eslint-plugin-nnimetz

ESLint pluging by Nicolas Nimetz

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-nnimetz`:

```
$ npm install eslint-plugin-nnimetz --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-nnimetz` globally.

## Usage

Add `nnimetz` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "nnimetz"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "nnimetz/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





