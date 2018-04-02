// Filename: replace-imports.js  
// Timestamp: 2018.03.30-00:51:52 (last modified)
// Author(s): bumblehead <chris@bumblehead.com>  

const acorn = require('acorn');

module.exports = (content, replacements) => acorn.parse(content, {
  sourceType: 'module',
  allowImportExportEverywhere: true
}).body.reverse().reduce((content, spec) => {
  if (spec.type === 'ImportDeclaration' &&
      spec.source.value in replacements) {
    content =
      content.substring(0, ++spec.source.start) +
      replacements[spec.source.value] +
      content.substring(--spec.source.end);
  }

  return content;
}, content);
