console.log global.env
exports.socket = if global.env == 'node' then std_import('network.third.io_browser_server').io.Socket else std_import('network.third.io_browser_client').io.Socket