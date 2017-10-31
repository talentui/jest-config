const babelConfig = require('@talentui/get-babel-config')();
module.exports = require('babel-jest').createTransformer(babelConfig)