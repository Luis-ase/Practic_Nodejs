const fs = require("fs")

const path ="./db/data.json"
const guardarDB= (data)=>{

    fs.writeFileSync(path, JSON.stringify(data));

};

const leerDB= ()=>{
    if(!fs.existsSync(path)){
        return null
    }
    const info = fs.readFileSync(path,{encoding:"utf-8"} )
    const parse = JSON.parse(info)
    console.log("***************")
    console.log(info)
    console.log("***************")
    return parse
}
module.exports= {guardarDB, leerDB}