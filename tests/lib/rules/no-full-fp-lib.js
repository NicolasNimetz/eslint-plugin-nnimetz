/**
 * @fileoverview ...
 * @author ...
 */
'use strict'

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

let rule = require('../../../lib/rules/no-full-fp-lib')
let RuleTester = require('eslint').RuleTester

RuleTester.setDefaultConfig({
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module'
  }
})

// ------------------------------------------------------------------------------
// Tests
// ------------------------------------------------------------------------------
let ruleTester = new RuleTester()
ruleTester.run('no-full-fp-lib', rule, {
  valid: [
    'import $ from \'jquery\'',
    'import { filter } from \'lodash/fp\''
  ],
  invalid: [
    {
      code: 'import _ from \'lodash\'',
      errors: [{
        message: 'Prefer importing single functions over a full FP library',
        type: 'ImportDeclaration'
      }]
    }
  ]
})
