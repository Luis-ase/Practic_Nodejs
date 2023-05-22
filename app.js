
const {inquirerMenu, pause} = require("./menu/inquirer")

const main = async () =>{
    console.clear()
    let output = ""
   
    while(output.option !=="0"){
        output = await inquirerMenu()
        await pause()
        if(output.option !=="0"){
            console.log(output)
        }
    }    
        // await pause()
    

}

main()