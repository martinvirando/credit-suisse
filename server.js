const express = require('express');
const webpackDevMiddleware = require("webpack-dev-middleware");
const webpack = require("webpack");

const webpackConfig = require("./webpack.config");

var app = express();
var compiler = webpack(webpackConfig);

app.use(webpackDevMiddleware(compiler, {
  publicPath: "/"
}));

app.listen(3000, function () {
  console.log("Listening on port 3000!");
});