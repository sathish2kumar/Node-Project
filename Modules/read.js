exports.retriverow=function(data,q){

    var coloums_values=''
    if(data.retrivevalues !== 'undefined' && data.retrivevalues !== undefined){
        console.log("dis",data.retrivevalues.toString())
        coloums_values+=data.retrivevalues.toString()
    }
    else{
        coloums_values+='* '
    }
    var condition=''
    if(data.where !== 'undeifined' && data.where !== undefined)
    {
    condition='where '
    data.where.map((val)=>{
              condition+=`${val.filed} = '${val.value}' ${val.condition} `
     })
    }

    var sqlquery=`select ${coloums_values} from ${data.tablename} ${condition}`;
    console.log("++++++++",sqlquery)
    var defer=q.defer()
    var arr=[]
     mysql.query(sqlquery,defer.makeNodeResolver())
      return defer.promise;
}