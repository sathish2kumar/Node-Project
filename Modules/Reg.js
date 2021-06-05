const Register = require("../Models/Register");
const createuser=(inp)=>{
   
    // const res= await Register.create({name:inp.name,homeaddress:inp.homeaddress,teststatus:inp.teststatus,age:inp.age,nooffamilymem:inp.nooffamilymem,
    // collectorkey:inp.collectorkey,policekey:inp.policekey,phno:inp.phno,password:inp.password,role:inp.role,sex:inp.sex,otherhealthproblm:inp.otherhealthproblm,currentloc:inp.currentloc})
    
   return Register.findOne({
        where: {email:inp.email}
    }).then(async function(res){
        if(res==null){
            await Register.create({name:inp.name,email:inp.email,password:inp.password})
            return "Register successfully"
        }
        else{
            return "email id already exists"
        }
    })
    
    
}
module.exports={createuser};