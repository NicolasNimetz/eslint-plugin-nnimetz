## Do not use var to declare variables

### Rule name: `no-var-set`

Always use `let` or `const` to declare variables.

### Rule Details

Examples of **incorrect** code for this rule:

```javascript
var variable = 'hello'
```

Examples of **correct** code for this rule:

```javascript
const variable = 'hello'
let variable = 'hello'
```
