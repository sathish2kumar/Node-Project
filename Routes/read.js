var express=require('express')
var router = express.Router()
var read= require('../Modules/read')
var app=express()
var fs = require("fs");
var multer  = require('multer');
const { async } = require('q');
const q = require('q');
router.post('/view',function(req,res,next){
  console.log("data",req.body)
  const arr=[] 
   req.body.table.map((data,index)=>{
      
      q.all(read.retriverow(data,q)).then(function(result) {
        arr.push(result[0])
        if((index+1) == req.body.table.length){
         res.json({'success':'yes',data:arr,message:'retrive sucessfully'})
         res.end();
      }
      })
      
   })
   
  
});
module.exports=router;
