var express = require('express');
var router = express.Router();
var request = require('request');
var http = require('http');
var fs = require('fs');
var download = require('download-file');

//// add your user names to this array
var userNameList = ['stuartgrossm'];
// starts call stack
getTokens(userNameList);

function getTokens(userNameList) {
  for(var i = 0; i < userNameList.length; i ++){
    var params = {};
    params['name'] = userNameList[i];
    params['value'] = 10;
    request.post({url: 'https://explorer.ultrain.io/blockchain//accountRecharge', form: params}, function(err, res){
      // console.log(err, res);
      if(err){
        console.log(err, 'something went wrong');
        return;
      }
      console.log(res.body)
      // var transactionId = res.body.data.transaction_id;
      // var transactionState = res.body.state;
      //transactionData = {'id': transactionId, 'state': transactionState, 'userName': userNameList[i]};
      // firebase.database(REF).push(transactionData).then(function(){
      // return;
      // })
      //save trasaction id , state to database with time stamp and total tokens collected
    })
  }
  reSendTokens();
}
function reSendTokens(){
  setTimeout(function(){
    console.log('attempting to send tokens')
    getTokens(userNameList);
  },15000);
}

// getTokens(userNameList);
module.exports = router;
