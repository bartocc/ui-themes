'use strict';

module.exports = {
  name: require('./package').name,

  isEnabled() {
    return require('./package').name === process.env.PAROG_NAME;
  },

  isDevelopingAddon() {
    return true;
  }
};
