const Tarea = require("./tarea");
require("colors")

class Tareas {
    _listado = {};
    get listadoArr() {
        const listado = []
        Object.keys(this._listado).forEach(key => {
            const tarea = this._listado[key];
            listado.push(tarea)
        }
        )
        return listado;
    }
    constructor() {
        this._listado = {}
    }
    cargarTareasFromArray(tareas = []) {
        tareas.forEach(tarea => {
            this._listado[tarea.id] = tarea
        })
    }
    crearTarea(desc = "") {
        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea
    }

    listadoCompleto() {
        console.log()
       this.listadoArr.forEach((tarea, index) => {
            const numero = `${index + 1}.`.green
            const state =  tarea.completadoEn ? "Completada".green: "Pendiente".red
            console.log(`${numero} ${tarea.desc}: ${state}`)
        })
        
    }

    listadoPendienteCompletados(completadas ) {
        console.log()
        let numero = 0
        this.listadoArr.forEach((tarea) => {
            const {completadoEn, desc} = tarea
            const state = completadoEn ? "Completada" : "Pendiente"
            if(completadas ){
                if(completadoEn ){
                    console.clear()
                    numero +=1
                    let leer = `${numero}. ${desc}: ${state}`.green
                  console.log(leer)
                }
            }else{
                if (!completadoEn) {
                    numero +=1
                    console.log(`${numero}. ${desc}: ${state}`.red)
                }
            }
        })

    }
    borrarTarea(){
        console.log("hola")
    }
}

module.exports = Tareas