const Sequelize=require('sequelize')
const sequelize = require('../db')
module.exports=sequelize.define('Register',{
    // userid:{
    //     type:Sequelize.INTEGER,
    //     allowNull:true,
    //     autoIncremrnt:true,
        
    // },
    name:{
        type:Sequelize.STRING
    },
    email:{
        type:Sequelize.STRING,
        unique: true
    },
    // teststatus:{
    //     type:Sequelize.INTEGER
    // },
    // age:{
    //     type:Sequelize.INTEGER
    // },
    // nooffamilymem:{
    //     type:Sequelize.INTEGER
    // },
    // collectorkey:{
    //     type:Sequelize.INTEGER
    // },
    // policekey:{
    //     type:Sequelize.INTEGER
    // },
    // phno:{
    //     type:Sequelize.INTEGER
    // },
    password:{
        type:Sequelize.STRING
    },
    // role:{
    //     type:Sequelize.STRING
    // },
    // sex:{
    //     type:Sequelize.STRING
    // },
    // otherhealthproblm:{
    //     type:Sequelize.STRING
    // },
    // currentloc:{
    //     type:Sequelize.STRING
    // }
    
},{
    modelName:'Register'
});
