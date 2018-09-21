var express = require('express');
var router = express.Router();
const config=require("../config");
var bodyParser = require('body-parser');
// create application/json parser
var jsonParser = bodyParser.json()

const UserActivity=require ('../models/useractivitymodel');

router.post('/api/v1/user/activity', jsonParser, async function (req, res) {
    var value;
    if(!req.body.address){
        res.status(400).send("User Address  not null");
    }else if(!config.web3.utils.isAddress(req.body.address)){
        res.status(400).send("Address invalid");
    }else{
        var ip=req.body.ip;
        var address=req.body.address;
        var time=req.body.time;
        if(req.body.activity === "login"){
            
            console.log("Login");
            
            value= await UserActivity.UserLogin(address,ip,time); 
            console.log("UserLogin value: "+value);
            if(value ==="ERROR"){
                res.status(400).send(value);
            }else {
                res.status(200).send(value);
            }
        }else if(req.body.activity === "logout"){
            value= await UserActivity.UserLogout(address,ip,time);
            console.log("UserLogin value: "+value);
            if(value ==="ERROR"){
                res.status(400).send(value);
            }else {
                res.status(200).send(value);
            }
        }else{
            res.status(403).send("Activity is not defined");
        }
    }
  });

router.get('/api/v1/user/getactivity/:address', jsonParser, async function (req, res) {
    let address=req.params.address;
    console.log(address);
    if(!address){
        res.status(400).send("User Address  not null");
    }else if(!config.web3.utils.isAddress(address)){
        res.status(400).send("Address invalid");
    }else{
        var value;
        value=await UserActivity.getUserActivities(address);
        if(value ==="ERROR"){
            res.status(400).send(value);
        }else {
            if(value[0]!==0){
                for (var i = 0, len = value[1].length; i < len; i++) {
                    console.log(value[1][i]);
                    if(value[1][i]=== "0")
                        value[1][i]="login";
                    else value[1][i]="logout";
                  }
                  
            }
            res.status(200).send(value);
        }
    }
  });
  
  module.exports=router;