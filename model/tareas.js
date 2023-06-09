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
            const state = completadoEn ? "Completada".green : "Pendiente".red
            if(completadas ){
                if( completadoEn ){
                    numero +=1
                    let leer = `${numero}. ${desc}: ${state}`
                  console.log(leer)
                }
            }else{
                if ( !completadoEn ) {
                    numero +=1
                    console.log(`${numero}. ${desc}: ${state}`)
                }
            }
        })

    }
    borrarTarea(id=""){
        if(this._listado[id]){
            delete this._listado[id]
        }
        console.log("hola")
    }

    compleatar_O_pendiente(ids=[]){
        ids.forEach((tareas) =>{
            const tarea = this._listado[tareas];
            if(!tarea.completadoEn){
                tarea.completadoEn = new Date().toISOString()
            }
        })

        this.listadoArr.forEach((tarea)=>{
            if(! ids.includes(tarea.id)){
                 this._listado[tarea.id].completadoEn = null
            }
        })

    }
}

module.exports = Tareas