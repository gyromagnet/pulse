export default {
  extends: ['stylelint-config-standard', 'stylelint-config-standard-scss'],
  rules: {
    'selector-class-pattern': '^(CodeMirror|[a-z0-9-]+)$',
    'selector-id-pattern': '^[a-z0-9-]+$',
    'rule-empty-line-before': null, // conflicts with eslint
  },
  overrides: [
    {
      files: ['**/*.html', '**/*.tsx'],
      customSyntax: 'postcss-html',
    },
  ],
};
