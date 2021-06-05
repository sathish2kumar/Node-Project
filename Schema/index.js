const { buildSchema } = require("graphql"); 
const reg=require('../Modules/Reg')
const log=require('../Modules/log');
const { updateuser } = require("../Modules/get_update");
const typeDef=buildSchema(
`input MessageInput {
        name:String
        email:String
        password:String
} 
type User {
        name:String
        email:String!
}    
type Query {
    hello:String
    Getuser(email:String!):User
    UpdateUser(input: MessageInput):String
}
type Mutation {
      Insertuser(input: MessageInput):String
     
}`

);
const resolver={
        hello:()=>{
                return "Hiiiii"
        },
        Insertuser:({input}) => {
              return reg.createuser(input)
        },
        Getuser:(email)=>{
            
            return log.retriveuser(email)
        },
        UpdateUser:({input})=>{
                console.log("++++++++",input)
            return updateuser(input)
        }

};
module.exports={typeDef,resolver};