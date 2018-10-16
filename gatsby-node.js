/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// XMLHttpRequest polyfill
global.XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;


const fs = require('fs-extra');
const path = require('path');

exports.onPostBuild = () => {
  fs.copySync(path.join(__dirname, '/static/locales'), path.join(__dirname, '/public/locales'));
};
