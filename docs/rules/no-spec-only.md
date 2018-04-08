## Do not push only from tests

### Rule name: `no-spec-only`

When we test a js functionality, we can use sometime .only. But when it is the time to push our work, we do not want commit this.


### Rule Details

Examples of **incorrect** code for this rule:

```javascript
describe.only('describe', () => { })
context.only('context', () => { })
it.only('it', () => { })
```

Examples of **correct** code for this rule:

```javascript
describe('describe', () => { })
context('context', () => { })
it('it', () => { })
```
