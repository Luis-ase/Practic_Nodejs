
const {inquirerMenu, pause} = require("./menu/inquirer")
const Tarea = require("./model/tarea")
const Tareas = require("./model/tareas")

const main = async () =>{
    console.clear()
    let output = ""
   
    while(output.option !=="0"){
        // output = await inquirerMenu()
        const tarea = new Tarea("Comprar comida");
        const tareas = new Tareas()
        tareas._listado[tarea.id] =tarea
        console.log(tarea)
        console.log(tareas)
        await pause()
        if(output.option !=="0"){
            console.log(output)
        }
    }    
        // await pause()
    

}

main()