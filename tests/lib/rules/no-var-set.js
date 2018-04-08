/**
 * @fileoverview ...
 * @author ...
 */
'use strict'

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------

let rule = require('../../../lib/rules/no-var-set')
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
ruleTester.run('no-var-set', rule, {
  valid: [
    'let test=\'variable\'',
    'const test=\'const\''
  ],
  invalid: [
    {
      code: 'var test=\'variable\'',
      errors: [{
        message: 'Do not use var',
        type: 'VariableDeclaration'
      }]
    }
  ]
})
