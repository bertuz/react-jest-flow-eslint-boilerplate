// https://webpack.js.org/guides/development/#using-webpack-dev-middleware
const express = require('express');
const server = require('https');
const { readFileSync } = require('fs');
const serveStatic = require('serve-static');
const { join } = require('path');
const webpack = require('webpack');
const webpackConfig = require(join(__dirname, '../../frontend/webpack.config'));

const webpackCompiler = webpack(webpackConfig('watch'));

const key = readFileSync(join(__dirname, '../../dev/cert/localhost.key'));
const cert = readFileSync(join(__dirname, '../../dev/cert/localhost.crt'));

const HOSTNAME = '0.0.0.0'; // Necessary for NodeJS to not listen to IPv6
const PORT = 3001;
const app = express();

app.get('/back', (req, res) => {
  res.send('Hello World!');
});

app.use('/bundles', serveStatic(join(__dirname, '../../dist')));

app.use(
  require('webpack-dev-middleware')(webpackCompiler, {
    publicPath: '/',
    writeToDisk: true,
    serverSideRender: false,
  }),
);

app.use(
  require('webpack-hot-middleware')(webpackCompiler, {
    path: '/__webpack_hmr',
  }),
);

/* eslint-disable no-console */
const handleListen = () => {
  console.log(`😊 listening at https://localhost:${PORT}!`);
};

server.createServer({ key, cert }, app).listen(PORT, HOSTNAME, handleListen);
