exports.updaterow=function(data){
    var coloums=Object.keys(data.updatevalues)
    var values=Object.values(data.updatevalues)
    var coloums_values=' SET '
    var total=coloums.length
    coloums.map((data,index)=>{
        if(total == parseInt(index)+1){
            coloums_values=coloums_values+` ${data} = '${values[index]}'`  
        }
        else{
        coloums_values=coloums_values+` ${data} = '${values[index]}',`
        }
    })
    var condition=` WHERE `
    data.where.map((val)=>{
              condition+=`${val.filed} = '${val.value}' ${val.condition} `
     })

    var sqlquery="update "+data.updatevalues.tablename+coloums_values+condition
    console.log("valuesss",sqlquery)
    query = mysql.query(sqlquery);
    return true
}
