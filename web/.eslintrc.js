module.exports = {
  env: {
    "browser": true,
    "es6": true,
    "node": true,
    "react-native/react-native": true,
},
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "react","react-native", "react-hooks"],
  parserOptions: {
    project: ["./tsconfig.json"],
    ecmaFeatures: {
      jsx: true
    }
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "airbnb-typescript",
    "prettier",
    "prettier/@typescript-eslint", // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    "plugin:prettier/recommended", // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    "plugin:react/recommended",
    "plugin:import/typescript",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
  ],
  rules:{
    "import/prefer-default-export": "off"
  }
};
