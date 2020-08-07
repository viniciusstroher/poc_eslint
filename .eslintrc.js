module.exports = {
    "env": {
        "browser": true,
        "es2020": true
    },
    "extends": [
        "standard",
        // "prettier",
        // "prettier/@typescript-eslint",

    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 11,
        "sourceType": "module"
    },
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {
        "semi": "error", //quando usar semicolum da problema
        "no-var": "error", // não permite var
        "max-len": ["error", {"code": 120, "ignoreUrls": true}] // max chars por linhas
    }
};
