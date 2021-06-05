const { buildSchema } = require("graphql"); 
const RegDef=buildSchema(
`input MessageInput {
        name:String
        homeaddress:Int
        teststatus:Int
        age:Int
        nooffamilymem:Int
        collectorkey:Int
        policekey:Int
        phno:Int
        password:String
        role:String
        sex:String
        otherhealthproblm:String
        currentloc:String
}

type Query {
        hello:String
}

type Mutation {
      Insertuser(input: MessageInput):String
  }`
);
const Regresolver={
        hello:()=>{
                return "hiiiiiiii"
        },
        Insertuser:({input}) => {
             return reg.createuser(input)
        }

};
module.exports={RegDef,Regresolver};

// homeaddress:Int
// teststatus:Int
// age:Int
// nooffamilymem:Int
// collectorkey:Int
// policekey:Int
// phno:Int
// role:String
//         sex:String
//         otherhealthproblm:String
//         currentloc:String



