express = require("express");

const config=require("./config");
const UserActivityRoute=require("./routes/useractivityroute");
const UserAccountRoute=require("./routes/useraccountroute");
      
var app = express();  

app.use(express.static("public"));
console.log('server starting');


app.use('/',UserActivityRoute);
app.use('/api/v1/user/account',UserAccountRoute);

var server = require("http").createServer(app);

server.listen(8090);

// const input = fs.readFileSync('../contracts/UserActivity.sol');
// const output = solc.compile(input.toString(), 1);
// const bytecode = output.contracts[':UserActivity'].bytecode;
// const abi = JSON.parse(output.contracts[':UserActivity'].interface);

// let provider = new Web3.providers.HttpProvider("http://localhost:7545");
// const web3 = new Web3(provider);
// web3.eth.defaultAccount = '0xB44E503eD615DF17C7050F942209C7E2ABAd0216'
// var result=web3.eth.accounts.create();
// console.log(result)
// console.log(result["address"]);
// console.log(result["privateKey"]);
// var userActivity = new web3.eth.Contract(abi, '0xfe91d2c3fb08d5d5f1a982105c85e1e16e1f65f2');

// //userActivity.methods.userLogin('0x9E37fcAfBece8F44aC93C0bd5809359431F9393B',300).send({from:web3.eth.defaultAccount});
// //userActivity.methods.userLogout('0x9E37fcAfBece8F44aC93C0bd5809359431F9393B',400).send({from:web3.eth.defaultAccount});
// userActivity.methods.getUserActivities('0x9E37fcAfBece8F44aC93C0bd5809359431F9393B').call(function(error, result){
//     if(error){
//         console.log("Error:"+error);
//     }else{
//         console.log(result[0]);
//         console.log(result[1]);
//         console.log(result[2]);
//     }
// });




