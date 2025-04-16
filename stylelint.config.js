export default {
  extends: ['stylelint-config-standard', 'stylelint-config-standard-scss'],
  rules: {
    'selector-class-pattern': '^(CodeMirror|[a-z0-9-]+)$',
    'selector-id-pattern': '^[a-z0-9-]+$',
  },
  overrides: [
    {
      files: ['**/*.html', '**/*.tsx'],
      customSyntax: 'postcss-html',
    },
  ],
};
