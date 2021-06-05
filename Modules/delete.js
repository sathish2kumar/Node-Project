exports.delterow=function(data){
    var condition=''
    if(data.where !== 'undeifined' && data.where !== undefined)
    {
    condition='where '
    data.where.map((val)=>{
              condition+=`${val.filed} = '${val.value}' ${val.condition} `
     })
    }
    var sqlquery=`delete from ${data.tablename} ${condition}`
    console.log("delete",sqlquery)
     mysql.query(sqlquery)
     return true
}