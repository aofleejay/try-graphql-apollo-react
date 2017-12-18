module.exports = {
  extends: "airbnb",
  rules: {
    semi: ["error", "never"],
    "react/jsx-filename-extension": 0,
    "react/prefer-stateless-function": 0,
    "import/prefer-default-export": 0,
    "class-methods-use-this": 0,
    "react/react-in-jsx-scope": 0,
  },
  env: {
    browser: true,
  },
}
