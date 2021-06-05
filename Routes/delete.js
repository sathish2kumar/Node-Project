var express=require('express')
var router = express.Router()
var delet = require('../Modules/delete')
var app=express()
var fs = require("fs");
var multer  = require('multer');
const { async } = require('q');
const q = require('q');
router.post('/delete',function(req,res,next){
  console.log("data",req.body)
  const arr=[] 
   req.body.table.map((data,index)=>{
      
        delet.delterow(data)
        if((index+1) == req.body.table.length){
         res.json({'success':'yes',message:'delete sucessfully'})
         res.end();
        }
      
   })
   
  
});
module.exports=router;
