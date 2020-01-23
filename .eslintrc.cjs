module.exports = {
    env: {
        commonjs: true,
        es6: true,
        node: true
    },
    extends: "eslint:recommended",
    globals: {
        Atomics: "readonly",
        SharedArrayBuffer: "readonly"
    },
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: "module"
    },
    rules: {
        semi: "error"
    },
    overrides: [
        {
            files: ["test/**/.spec.js"],
            rules: {
                "require-jsdoc": "off"
            }
        }
    ]
};