const babelConfig = require('@talentui/webpack-config/helpers/get-babel-config.js')();
module.exports = require('babel-jest').createTransformer(babelConfig)