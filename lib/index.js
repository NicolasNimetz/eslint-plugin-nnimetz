/**
 * @fileoverview ESLint pluging by Nicolas Nimetz
 * @author Nicolas Nimetz
 */
'use strict'

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------
// let requireIndex = require('requireindex')
// let path = require('path')

// ------------------------------------------------------------------------------
// Plugin Definition
// ------------------------------------------------------------------------------

// import all rules in lib/rules
// module.exports.rules = requireIndex(path.join(__dirname, '/rules'))

// import all rules in lib/rules
module.exports.rules = {
  'no-full-fp-lib': require('./rules/no-full-fp-lib'),
  'no-spec-only': require('./rules/no-spec-only'),
  'no-var-set': require('./rules/no-var-set')
}

module.exports.configs = {
  recommended: {
    rules: {
      'nnimetz/no-full-fp-lib': 2,
      'nnimetz/no-spec-only': 2,
      'nnimetz/no-var-set': 2
    }
  }
}
