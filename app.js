const {guardarDB,leerDB} = require("./brackets/read_save")
const {inquirerMenu, pause ,leerinput} = require("./menu/inquirer")

const Tareas = require("./model/tareas")

const main = async () =>{
    console.clear()
    let output = ""
    const tareas = new Tareas()
    const tareas_db = leerDB()
    if(tareas_db){
        tareas.cargarTareasFromArray(tareas_db)
    }
    await pause()

    while(output.option !=="0"){
        output = await inquirerMenu()
        switch(output.option){
            case 1:
                const desc= await leerinput("Description: ")
                if(desc.descrip){
                    tareas.crearTarea(desc.descrip)
                }
                break
            case 2:
                tareas.listadoCompleto()
                break
            case 3:
                tareas.listadoPendienteCompletados(true)
                break
            case 4:
                tareas.listadoPendienteCompletados(false)  
            break;
        }

          guardarDB(tareas.listadoArr)
          await pause()
    }    
    

}

main()