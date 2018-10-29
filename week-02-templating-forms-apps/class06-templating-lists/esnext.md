ESNext: Modules and Variables
===

## Modules

Clear boundaries between files. Explicit import and export

```html
<script type="module" src="app.js"></script>
```

### Exporting

Export a function:

```js
export default function thing() {
    //...
}

// or

function thing() {}

export default thing;
```

Export anything same way:

```js
export default ['bananas', 'mangoes', 'cherries'];

// or

const fruits = ['bananas', 'mangoes', 'cherries'];

export default fruits;

```

### Importing

For default exports, you can choose what to call it:

```js
import thing from './file.js';
```

## Variables

Introducing `const` and `let`:

* Block scoped
* Cannot reassign `const` (but you can mutate the value!)

## Template Literals

```js
// Instead of:
const greeting = 'hello ' + name + '!';

// We can write:
const greeting = `hello ${name}`;

```

Very handy for making html:

```js
const html = '<li class="' + className + '">' + result + '</li>';

//vs:

const html = `<li class="${className}">${result}</li>`;
```

## Ternary

Not a new feature, but something new for our toolbox!

Conditional _expressions_:

```js

<condition> ? <true-part> : <false-part>

x >= 0 ? 'positive' : 'negative'

```
