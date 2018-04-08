## Do not import a full library

### Rule name: `no-full-fp-lib`

Prefer importing single functions over a full FP library

## Rule Details

Examples of **incorrect** code for this rule:

```javascript
import _ from 'lodash'
```

Examples of **correct** code for this rule:

```javascript
import $ from 'jquery'
import { filter } from 'lodash'
```
