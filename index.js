module.exports = {
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2020
  },

  plugins: ["import", "node", "react", "prettier"],

  rules: {
    "prettier/prettier": "error",
    "import/max-dependencies": ["warn", { max: 15 }],
    "import/order": [
      "error",
      {
        "newlines-between": "never",
        groups: []
      }
    ]
  }
};
