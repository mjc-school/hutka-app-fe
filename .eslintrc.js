module.exports = {
    env: {
      "browser": true,
      "es6": true,
      "node": true,
  },
    root: true,
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint"],//,"@react-native-community", "react","react-native", "react-hooks", "eslint-plugin-import-order-alphabetical"],
    parserOptions: {
      project: ["./tsconfig.json"],
      ecmaFeatures: {
        jsx: true
      }
    },
    extends: [
      // 'airbnb-typescript', 'prettier', 'prettier/@typescript-eslint', 'prettier/react',
      "react-native-typescript",
      // "eslint:recommended",
      // "plugin:@typescript-eslint/recommended",
      // "airbnb-typescript",
      // "prettier",
      // 'prettier/react',
      // "prettier/@typescript-eslint", // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
      // "plugin:prettier/recommended", // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
      // "plugin:react/recommended",
      // "plugin:import/typescript",
      // "eslint:recommended",
      // "plugin:react/recommended",
      // "plugin:react-hooks/recommended",
      // '@react-native-community',
    ],
    rules:{
      "import-order-alphabetical/order": "off",
      "import/prefer-default-export": "off",
      "quotes": "off",
        "import/no-unresolved": 0,
    "react/jsx-filename-extension": [1, {
      "extensions": [
        ".ts",
        ".tsx"
      ]
    }],
    "prettier/prettier": [
      "error",
      {
        "singleQuote": true,
        "trailingComma": "all",
        "arrowParens": "avoid",
        "endOfLine": "auto",
        "semi": true,
      }
    ],
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": ["error"],
    "import/extensions": ["error", "never"],
    "react/prop-types": 0,
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": ["error"]
    }
  };
  