import globals from "globals";
const { jest } = globals;

import path from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import pluginJs from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";

// mimic CommonJS variables -- not needed if using CommonJS
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: pluginJs.configs.recommended,
});

export default [
  {
    languageOptions: {
      globals: globals.browser,
      ecmaVersion: 6,
    },
    rules: {
      "import/no-named-as-default": "off",
      "import/no-named-as-default-member": "off",
    },
  },
  ...compat.extends("airbnb-base"),
  eslintConfigPrettier,
];
