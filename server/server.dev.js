const express = require('express');
const webpackDevMiddleware = require("webpack-dev-middleware");
const webpack = require("webpack");

const webpackConfig = require("../webpack.config");

const app = express();
const compiler = webpack(webpackConfig);

app.use(webpackDevMiddleware(compiler, {
  publicPath: "/"
}));

app.listen(3000, function () {
  console.log("Development Server: Listening on port 3000!");
});