var express = require('express');
var router = express.Router();
const UserAccountModel=require ('../models/useraccountmodel');

//Create account and private key for account
router.get('/', function (req, res) {
    const result= UserAccountModel.CreateAccount();
    res.status(200).send({status:"SUCESS",address:result[0],key:result[1]});
  });

module.exports=router;