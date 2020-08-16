module.exports = {
  //parser: "babel-eslint",
  extends: [
    "eslint:recommended",
    //"plugin:react/recommended",
    "plugin:prettier/recommended",
  ],
  plugins: ["html" /*, "react"*/],
  env: { browser: true, node: true, es2020: true },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    //jsx: true,
  },
  settings: {
    /*react: {
      version: "detect",
    },*/
  },
  rules: {
    "no-unused-vars": 1,
    "prettier/prettier": 1,
  },
};
