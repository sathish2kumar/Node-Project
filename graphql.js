var express=require('express')
var bodyParser = require('body-parser');
// var express_graphql=require('express-graphql').graphqlHTTP;
// var {buildSchema}=require('graphql')
const db=require('./db.js')
// const Sequelize = require('sequelize');
var router = express.Router()
// const { require } = require('@ungap/global-this');
var app=express();
var post=require('./Routes/post'),
    view=require('./Routes/read');
const { route } = require('./Routes/post');
// const { makeRemoteExecutableSchema } = require('graphql-tools');
// const router = express.Router();
// app.use(app.router);
// Router.(app);
router.use(bodyParser.urlencoded({ extended: false }));
router.use(express.static('public'));
router.use('/project',post);
router.use('/view',view);
// routes.initialize(app);
// 
db.connectdb();
// var schema=require("./Schema/index.js")
// app.use('/graphql', express_graphql({
//     schema:schema.typeDef,
//     rootValue:schema.resolver,
//     graphiql:true
// }))

// sequelize.authenticate().then(()=>{
//   sequelize.sync()
//     console.log("sucesss")
// })
// .catch(err=>{
//   console.log("Error",err)
// });

module.exports=router;
app.listen(4040);