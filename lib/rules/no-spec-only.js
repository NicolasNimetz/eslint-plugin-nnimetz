/**
 * @fileoverview ...
 * @author ...
 */
'use strict'

// ------------------------------------------------------------------------------
// Rule Definition
// ------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: '...',
      category: 'Fill me in',
      recommended: false
    },
    fixable: null, // or "code" or "whitespace"
    schema: [
      // fill in your schema
    ]
  },

  create: function (context) {
    // variables should be defined here
    const keyWords = ['describe', 'context', 'it']

    // ----------------------------------------------------------------------
    // Helpers
    // ----------------------------------------------------------------------

    // any helper functions should go here or else delete this section

    // ----------------------------------------------------------------------
    // Public
    // ----------------------------------------------------------------------
    return {
      MemberExpression: function (node) {
        if (node.object &&
            node.object.name &&
            keyWords.indexOf(node.object.name) !== -1 &&
            node.property &&
            node.property.name === 'only') {
          const keyWord = keyWords[keyWords.indexOf(node.object.name)]
          context.report(node, `Do not use ${keyWord}.only`)
        }
      }
    }
  }
}
