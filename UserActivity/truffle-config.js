module.exports = {
    networks: {
      ganache: {
        host: "localhost",
        port: 7545,
        gas: 6700000,
        network_id: "*" // Match any network id
      }
    }
  };