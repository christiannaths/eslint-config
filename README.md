# @christiannaths/eslint-config

My personal ESLint flat config for JavaScript and TypeScript.

## Usage

Install ESLint, TypeScript, and the config:

```bash
npm install --save-dev eslint typescript @christiannaths/eslint-config
```

Create `eslint.config.js`:

```js
import christiannaths from "@christiannaths/eslint-config";

export default [...christiannaths];
```

ESLint 10 and Node.js 20.19 or newer are required. The config includes ESLint's
recommended rules, import checks, the shared Node/browser globals, and the
project's custom rule overrides. TypeScript rules apply only to `.ts`, `.tsx`,
`.mts`, and `.cts` files.
