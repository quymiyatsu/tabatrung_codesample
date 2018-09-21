const fs = require("fs"),
      abiDecoder = require('abi-decoder'),
      Web3 = require('web3'),
      solc = require('solc');

let provider = new Web3.providers.HttpProvider("http://13.152.130.24:15000");
const web3 = new Web3(provider);
var newAccount=web3.eth.accounts.create();
console.log("default:"+newAccount["address"]);
web3.eth.defaultAccount = newAccount["address"];
const defaultAccount=newAccount["address"];


//Set ABI for UserActivity
const inputUserActivity = fs.readFileSync('../contracts/UserActivity.sol');
const outputUserActivity = solc.compile(inputUserActivity.toString(), 1);
const bytecode = outputUserActivity.contracts[':UserActivity'].bytecode;
const abiUserActivity = JSON.parse(outputUserActivity.contracts[':UserActivity'].interface);
var userActivity = new web3.eth.Contract(abiUserActivity, '0xfe91d2c3fb08d5d5f1a982105c85e1e16e1f65f2');


module.exports ={
    web3,abiUserActivity,userActivity,defaultAccount
};