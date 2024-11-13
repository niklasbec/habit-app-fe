module.exports = {
  extends: ["expo", "prettier"],
  plugins: ["prettier", "react-native"],
  rules: {
    "prettier/prettier": ["error", { endOfLine: "auto", trailingComma: "all" }],
    "react-native/no-unused-styles": "error",
  },
};
