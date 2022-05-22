/**
 * Config for react-app-rewired.
 * react-app-rewired allow us to use baseUrl + Paths without ejecting the project
 */

const path = require('path');
module.exports = function override(config) {
  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.alias,
      '@app': path.resolve(__dirname, 'src'),
    },
  };
  return config;
};
