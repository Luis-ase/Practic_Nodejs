const {guardarDB,leerDB} = require("./brackets/read_save")
const {inquirerMenu, 
    pause ,
    leerinput, 
    listadoTareasBorrar,
    confirmarEliminacion,
    listadoTareasCompleatar} = require("./menu/inquirer")

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
            case 5:
               const idx = await listadoTareasCompleatar(tareas.listadoArr);
               
               if(idx.ids){
                   console.log(idx.ids)
                    tareas.compleatar_O_pendiente(idx.ids)
               }
               
                break;
            case 6:
                const id  = await listadoTareasBorrar(tareas.listadoArr) 
                const ok = await confirmarEliminacion("Estas seguro")  
                
                if(id.delete === "0"){
                    if(ok){
                        tareas.borrarTarea(id.delete)
                    }
                }
            break;
        }

          guardarDB(tareas.listadoArr)
          await pause()
    }    
    


}

main()