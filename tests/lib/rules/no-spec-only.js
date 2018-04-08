/**
 * @fileoverview ...
 * @author ...
 */
'use strict'

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

let rule = require('../../../lib/rules/no-spec-only')
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
ruleTester.run('no-spec-only', rule, {
  valid: [
    'describe(\'describe\', () => { })',
    'context(\'context\', () => { })',
    'it(\'it\', () => { })'
  ],
  invalid: [
    {
      code: 'describe.only(\'test\', () => { })',
      errors: [{
        message: 'Do not use describe.only',
        type: ''
      }]
    },
    {
      code: 'context.only(\'test\', () => { })',
      errors: [{
        message: 'Do not use context.only',
        type: ''
      }]
    },
    {
      code: 'it.only(\'test\', () => { })',
      errors: [{
        message: 'Do not use it.only',
        type: ''
      }]
    }
  ]
})
