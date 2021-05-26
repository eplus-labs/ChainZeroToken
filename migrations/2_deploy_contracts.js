const ChainZeroToken = artifacts.require("ChainZeroToken");

module.exports = function(deployer) {
  deployer.deploy(ChainZeroToken, 1000000);
};
