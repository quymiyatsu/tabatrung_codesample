const config=require("../config");

async function UserLogin( _address,_ip,_time){
    var result;
    await config.userActivity.methods.userLogin(_address,_ip,_time).
        send({from:'0xAB3410661a513E210f0679209a580a22191e9201'}, function(error,transactionHash){
        if (error){
            result="ERROR";
            console.log("Error:"+error);
            //return "ERROR";
        }else{
            result=transactionHash;
            console.log("hash:"+transactionHash);
            //return transactionHash;
        }
    });
    return result;
}

async function UserLogout(_address,_ip,_time){
    var result;
    await config.userActivity.methods.userLogout(_address,_ip,_time).
        send({from:'0xAB3410661a513E210f0679209a580a22191e9201'},function(error,transactionHash){
        if (error){
            result="ERROR";
        }else{
            result=transactionHash;
        }
    });
    return result;
}

async function getUserActivities(_address){
    var result;
    await config.userActivity.methods.getUserActivities(_address).call(function(error, userActivities){
        if(error){
            result= "ERROR";
        }else{
            result= userActivities;
        }
    });
    console.log("activity:"+result);
    return result;
}
module.exports= {
    UserLogin,UserLogout,getUserActivities
}