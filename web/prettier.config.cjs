/** @type {import("prettier").Config} */
module.exports = {
    plugins: [require.resolve('prettier-plugin-tailwindcss')],
    singleQuote: true,
    printWidth: 120,
    'editor.formatOnSave': true,
    proseWrap: 'always',
    tabWidth: 4,
    requireConfig: false,
    useTabs: false,
    trailingComma: 'none',
    bracketSpacing: true,
    bracketSameLine: true,
    jsxBracketSameLine: true,
    arrowParens: 'avoid',
    semi: true
};
