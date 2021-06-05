var mysql=require('mysql');
const axios=require('axios');
// const { async } = require('q');
exports.connectdb=function()
{
global.connect=mysql.createConnection({host:'localhost',user:'root',password:''});
global.connect.connect(function(err){
   if(err){
       console.log("error",err)
   }
   else{
    console.log("connected")
    // callapi()
   }
});
global.connect.query('use test',function(err){
   if(err){
       console.log("error",err)
   }
  global.mysql=global.connect;
});
}
// async function callapi(){ var data={
//     table:[{
//       name:"sathish",
//       age:"18",
//       tablename:"newtable"
//     }

//     ]
//   }
//   try{
//  const res=await axios.post('http://localhost:4040/create/insert',data,{})
//   }
//   catch(e){
//      console.log("+++++++++++++++++++++")
//   }
//  console.log("testttttttttttt",res)
// }