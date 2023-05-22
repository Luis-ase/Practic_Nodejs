const Tarea = require("./tarea");
require("colors")
class Tareas{
    _listado= {};
    get listadoArr(){
        const listado = []
        Object.keys(this._listado).forEach(key =>{
                const tarea = this._listado[key];
                listado.push(tarea)
            }
        )
        return listado;
    }
    constructor(){
        this._listado ={}
    }
    cargarTareasFromArray(tareas=[]){
        tareas.forEach(tarea =>{
            this._listado[tarea.id] = tarea
        })
    }
    crearTarea(desc=""){
        const tarea= new Tarea(desc);
        this._listado[tarea.id] = tarea
    }
    listadoCompleto(){
        this.listadoArr.forEach((tarea,index) =>{
            console.log(`${String(index+1).green} ${tarea.desc}: ${tarea.completadoEn? "Completado".green : "Pendiente".red}`)
        })
        return list
    }
}

module.exports = Tareas