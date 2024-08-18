const Web3 = require('web3');

// Update this to use Web3's built-in provider class directly
const web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:7545'));

const EVM_REVERT = 'VM Exception while processing transaction: revert';
const ETHER_ADDRESS = "0x0000000000000000000000000000000000000000";

const ether = (n) => {
  return new web3.utils.BN(
    web3.utils.toWei(n.toString(), 'ether')
  );
};

const tokens = (n) => ether(n);

module.exports = {
  tokens,
  ether,
  EVM_REVERT,
  ETHER_ADDRESS
};
