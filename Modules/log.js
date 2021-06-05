const Register = require("../Models/Register");
const retriveuser=(mail)=>{
   console.log("+++++++",mail)
   return Register.findOne({
        where: {email:mail.email}
    }).then(async function(res){
           return await res
        
    })  

}

module.exports={retriveuser};