
const guardarDB = require("./brackets/read_save")
const {inquirerMenu, pause ,leerinput} = require("./menu/inquirer")
const Tarea = require("./model/tarea")
const Tareas = require("./model/tareas")

const main = async () =>{
    console.clear()
    let output = ""
    const tareas = new Tareas()
    while(output.option !=="0"){
        output = await inquirerMenu()
        switch(output.option){
            case 1:
                const desc= await leerinput("Description: ")
                if(desc.descrip){
                    tareas.crearTarea(desc.descrip)
                    console.log(tareas)
                }
            case 2:
                console.log(tareas.listadoArr)    
            break;
        }

        // guardarDB(tareas.listadoArr)
        await pause()
        if(output.option !=="0"){
            console.log(output)
        }
    }    
        // await pause()
    

}

main()