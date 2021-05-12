import express from 'express';
import {readFileSync}  from 'fs';
import spdy from 'spdy';
import server from 'https';
import webpack from 'webpack';
import serveStatic from 'serve-static';
import webpackConfig from '../../frontend/webpack.config.js';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

const __filename = new URL('', import.meta.url).pathname;
// Will contain trailing slash
const __dirname = new URL('.', import.meta.url).pathname;
//
const webpackCompiler = webpack(webpackConfig('watch'));
//
const key = readFileSync(__dirname + '../../dev/cert/localhost.key');
const cert = readFileSync(__dirname + '../../dev/cert/localhost.crt');
const PORT = 3001;

const app = express();
const options = {
  key,
  cert
}

app.get('/back', (req, res) => {
  res.json({ name: 'Test name' });
});

app.use(
  webpackDevMiddleware(webpackCompiler, {
    publicPath: '/app',
    writeToDisk: true,
    serverSideRender: false,
  }),
);

app.use(
  webpackHotMiddleware(webpackCompiler, {
    path: '/__webpack_hmr',
  }),
);
app.use('/', serveStatic(__dirname + '../../dev/static'));

spdy.createServer(options, app)
  .listen(PORT, (error) => {
    if (error) {
      console.error(error)
      return process.exit(1)
    } else {
      console.log(`😊 listening at https://localhost:${PORT}!`);
    }
  });

