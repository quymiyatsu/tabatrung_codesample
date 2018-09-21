const config=require("../config");

function CreateAccount(){
    var result=config.web3.eth.accounts.create();
    return [result["address"],result["privateKey"]];
}

module.exports={
    CreateAccount
};