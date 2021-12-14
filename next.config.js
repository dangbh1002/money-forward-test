/** @type {import('next').NextConfig} */

const { merge } = require('webpack-merge');
const CUSTOM_WEBPACK_CONFIG = require('./webpack.config');

module.exports = {
  reactStrictMode: false,
  sassOptions: {
    prependData: '@import "./src/styles/_variables.scss";',
  },
  webpack: (config) => merge(config, CUSTOM_WEBPACK_CONFIG),
}
