import js from "@eslint/js";

export default [
  // ===============================
  // Backend (Node / CommonJS)
  // ===============================
  {
    files: ["server/**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "commonjs",
      globals: {
        require: "readonly",
        module: "readonly",
        __dirname: "readonly",
        console: "readonly",
      },
    },
    rules: {
      ...js.configs.recommended.rules,
      "no-unused-vars": "warn",
    },
  },

  // ===============================
  // Frontend (React / JSX)
  // ===============================
  {
    files: ["server/frontend/src/**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        window: "readonly",
        document: "readonly",
        console: "readonly",
      },
    },
    rules: {
      ...js.configs.recommended.rules,
      "no-unused-vars": "warn",
    },
  },
];
