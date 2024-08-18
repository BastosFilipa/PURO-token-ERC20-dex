module.exports = {
  env: {
    es6: true,
    node: true,
    mocha: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },
  globals: {
    artifacts: "readonly",
    deployer: "readonly",
    contract: "readonly",
    it: "readonly",
    describe: "readonly",
    beforeEach: "readonly",
    afterEach: "readonly",
  },
  plugins: ["prettier", "truffle"],
  extends: ["eslint:recommended", "plugin:prettier/recommended"],
  rules: {},
};
