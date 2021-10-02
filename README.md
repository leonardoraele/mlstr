# mlstr

[![](https://img.shields.io/npm/v/mlstr)](https://npmjs.com/package/mlstr)

Zero-dependency multiline string template.

## Intallation

    npm install mlstr

or

    yarn add mlstr

## Usage

First, `import` or `require` the lib:

```js
const mlstr = require('mlstr');

// or

import mlstr from 'mlstr';
```

Then just add the `mlstr` tag in front of a string template with multiple lines
to compact it into a plain string.
Line breaks in the string template are replaced by spaces.

**Example:**

```js
const mystring = mlstr`
        The string can have many
        lines but the output will
        be plain text.

        Leave one line empty to
        create actual line breaks
        in the string output.
        (similar to markdown)
    `;

console.log(mystring);
```

The code above outputs this:

```
The string can have many lines but the output will be plain text.
Leave one line empty to create actual line breaks in the string output. (similar to markdown)
```

## LICENSE

MIT (see [LICENSE.md](/license.txt) file for details)
