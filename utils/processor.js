const babelConfig = require('@beisen/talent-ui-webpack-config/helpers/get-babel-config.js')();
module.exports = require('babel-jest').createTransformer(babelConfig)