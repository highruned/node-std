(function() {
  exports.socket = global.env === 'node' ? std_import('network.third.io-browser-server').io.Socket : std_import('network.third.io-browser-client').io.Socket;
}).call(this);
