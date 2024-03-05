"use strict";

/** @type {import('@typescript-eslint/utils').TSESLint.Linter.ConfigType} */
module.exports = {
  extends: [`plugin:deprecation/recommended`, `@ryb73`],

  overrides: [
    {
      files: [`src/index.ts`],
      rules: {
        "@typescript-eslint/parameter-properties": `off`,
        "import/no-unused-modules": `off`,
      },
    },
  ],

  rules: {
    "@typescript-eslint/parameter-properties": `off`,
  },
};
