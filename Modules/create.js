exports.insertrow=function(data){
    var coloums=Object.keys(data).toString()
    var values="'"+Object.values(data).join("','")+"'"
    var sqlquery="insert into "+data.tablename+"("+coloums+")"+"values("+values+")"
    console.log("valuesss",sqlquery)
    query = mysql.query(sqlquery);
    return true
}

