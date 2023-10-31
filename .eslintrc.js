module.exports = {
  settings: {
    react: {
      pragma: "React",
      fragment: "Fragment",
      version: "detect",
    },
  },
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["react", "prettier"],
  rules: {
    "prettier/prettier": "error",
    "no-unused-vars": "off",
    "react/display-name": [0, { ignoreTranspilerName: false }],
    "react/prop-types": [0, { ignore: [], customValidators: [] }],
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
  },
};
