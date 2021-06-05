const Sequelize = require('sequelize')



const sequelize = new Sequelize("testdb","root","",{
    host:"localhost",
    dialect:"mysql",
    port:"3306",
    pool:{
        max:5,
        min:0,
        acquire:30000,
        idle:10000
    },
    dialectOptions:{
        instanceName:'testdb',
        domain:'localhost:4040'      
    }
})

module.exports=sequelize;
global.sequelize=sequelize;
