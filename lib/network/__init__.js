(function() {
  console.log(global.env);
  exports.socket = global.env === 'node' ? std_import('network.third.io_browser_server').io.Socket : std_import('network.third.io_browser_client').io.Socket;
}).call(this);
