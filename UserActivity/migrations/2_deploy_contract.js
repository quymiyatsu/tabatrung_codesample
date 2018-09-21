var UserActivity = artifacts.require("./UserActivity.sol");

module.exports = function(deployer) {
  deployer.deploy(UserActivity);
};
