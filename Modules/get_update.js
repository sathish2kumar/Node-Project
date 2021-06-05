const Register = require("../Models/Register");
const updateuser=async(inp)=>{
    await Register.update({name:inp.name,password:inp.password},{where:{email:inp.email}})
    return 'Updated sucessfully!'
}

module.exports={updateuser};