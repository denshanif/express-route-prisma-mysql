module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": "eslint:recommended",
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules": {
        "no-unused-vars": "off",
        "no-undef": "off",
        "no-console": "off",
        "no-multi-spaces": ["error", { "ignoreEOLComments": true }],
        "no-trailing-spaces": ["error", { "ignoreComments": true }],
        "semi": ["error", "always"]
    }
};
