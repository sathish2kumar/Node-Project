var express=require('express')
var bodyParser = require('body-parser');
const db=require('./db.js')
var router = express.Router()
var app=express();
const cors=require('cors')
var create=require('./Routes/create'),
read=require('./Routes/read'),
update=require('./Routes/update')
deleteop =require('./Routes/delete')
const axios=require('axios');
const { async } = require('q');
deleteop=require('./Routes/delete')
router.use(cors());
db.connectdb();
// router.use(bodyParser())
// router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json())
app.use('/',router)
router.use(function name(req,res,next) {
     res.setHeader('Content-Type','text/plain')   
     console.log("bodyparser",req.body)
     next()
})

router.use(express.static('public'));
router.use('/create',create);
router.use('/read',read);
router.use('/Update',update);
router.use('/drop',deleteop);


module.exports=router;
app.listen(4040);
