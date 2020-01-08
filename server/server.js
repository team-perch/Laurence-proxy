/* eslint-disable no-console */
require('newrelic');
const express = require('express');
const path = require('path');
const httpMiddleware = require('http-proxy-middleware');

const app = express();

app.use(express.static(path.resolve(__dirname, '..', 'public')));

const imageGalleryOptions = {
  target: 'http://52.9.82.201:3003',
  changeOrigin: true,
};

const imageGalleryProxy = httpMiddleware(imageGalleryOptions);

app.use('/api/images/', imageGalleryProxy);

const port = 3000;
app.listen(port, console.log(`listening on ${port}`));
