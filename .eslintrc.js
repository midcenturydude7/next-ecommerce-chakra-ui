// eslint-disable-next-line no-undef
module.exports = {
  "env": {
    "browser": true,
    "es2021": true,
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
  ],
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true,
    },
    "ecmaVersion": "latest",
    "sourceType": "module",
  },
  "plugins": [
    "react",
  ],
  "rules": {
    // "react/prop-types": ["ignore"],
    "quotes": ["error", "double",],
    // we want to force semicolons
    "semi": ["error", "always",],
    // we want to force commas
    "comma-dangle": ["error", 2,],
    // we use 2 spaces to indent our code
    "indent": ["error", 2,],
    // we want to avoid extraneous spaces
    "no-multi-spaces": ["error", 2,],
  },
};
