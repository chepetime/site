/* eslint-disable */

const path = require('path');
const PrerenderSPAPlugin = require('prerender-spa-plugin');

const staticDir = path.join(__dirname, 'dist');
const routes = [
  '/',
];

const inProduction = process.env.NODE_ENV === 'production';
const publicPath = '/';

const PRODUCTION_CONFIG = {
  configureWebpack: {
    plugins: [
      new PrerenderSPAPlugin(
        {
          staticDir,
          routes,
          minify: {
            collapseBooleanAttributes: true,
            collapseWhitespace: true,
            decodeEntities: true,
            keepClosingSlash: true,
            sortAttributes: true,
          },
        },
      ),
    ],

    performance: {
      hints: false
    },

    optimization: {
      splitChunks: {
        minSize: 10000,
        maxSize: 249856,
      }
    },
  },
  filenameHashing: true,
  publicPath,
};

const DEV_CONFIG = {
  filenameHashing: false,
  publicPath,
};

console.log(`Task running for ${inProduction ? 'Production 🚀' : ' Development 🗜'}`);

module.exports = inProduction ? PRODUCTION_CONFIG : DEV_CONFIG;
