var express=require('express')
var router = express.Router()
var create= require('../Modules/create')
var app=express()
var fs = require("fs");
var multer  = require('multer');
const { async } = require('q');
router.post('/insert',function(req,res,next){
  console.log("data",req.body)
   req.body.table.map((data,index)=>{
        create.insertrow(data);
        if((index+1) == req.body.table.length){
          res.json({'success':'yes',message:'insert sucessfully'})
          res.end();
         }

   })
   
   //  router.use(multer({ dest: '/image/'}));
   //  var file = __dirname + "/" + req.files.file.name;
   //  fs.readFile( req.files.file.path, function (err, data) {
   //      fs.writeFile(file, data, function (err) {
   //         if( err ) {
   //            console.log( err );
   //            } else {
   //               response = {
   //                  message:'File uploaded successfully',
   //                  filename:req.files.file.name
   //               };
   //            }
           
   //         console.log( response );
   //      //    res.end( JSON.stringify( response ) );
   //      });
   //   });
  
     
});
module.exports=router;
