import js from "@eslint/js";
import { defineConfig } from "eslint/config";
import importPlugin, { flatConfigs } from "eslint-plugin-import-x";
import globals from "globals";
import tseslint from "typescript-eslint";

const UNUSED_VARIABLE_OPTIONS = {
  args: "all",
  argsIgnorePattern: "^_",
  varsIgnorePattern: "^_",
};

export default defineConfig([
  {
    name: "@christiannaths/eslint-config/common",
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,tsx}"],
    extends: [js.configs.recommended],
    languageOptions: {
      ecmaVersion: "latest",
      globals: {
        ...globals["shared-node-browser"],
        ...globals.commonjs,
      },
    },
    plugins: {
      "import-x": importPlugin,
    },
    rules: {
      ...flatConfigs.recommended.rules,
      "import-x/max-dependencies": ["warn", { max: 15 }],
      "import-x/order": [
        "error",
        {
          "newlines-between": "never",
          groups: [],
        },
      ],
      "no-console": [
        "warn",
        { allow: ["info", "warn", "error", "time", "timeEnd"] },
      ],
      "no-debugger": "warn",
      "no-shadow": "error",
      "no-unreachable": "warn",
    },
  },
  {
    name: "@christiannaths/eslint-config/javascript",
    files: ["**/*.{js,mjs,cjs}"],
    rules: {
      "no-unused-vars": ["warn", UNUSED_VARIABLE_OPTIONS],
    },
  },
  {
    name: "@christiannaths/eslint-config/typescript",
    files: ["**/*.{ts,mts,cts,tsx}"],
    extends: [tseslint.configs.recommended],
    rules: {
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unused-vars": ["warn", UNUSED_VARIABLE_OPTIONS],
    },
  },
]);
