const inquirer = require('inquirer');

require("colors")



const inquirerMenu = async( )=>{
    const preguntas = [
        {
            type:"list",
            name:"option",
            massage:"que desea hacer",
            choices:[
                {
                    value:1,
                    name:"1. Crear Tarea"
                },
                {
                    value:2,
                    name:"2. Lista de tarea"
                },
                {
                    value:3,
                    name:"3. Listar tares completadas"
                },
                {
                    value:4,
                    name:"4. Listar tareas pendientes"
                },
                {
                    value:5,
                    name:"5. Completar tarea(s)"
                },
                {
                    value:6,
                    name:"6. Borrar tarea"
                },
                {
                    value:"0",
                    name:"0. Salir \n"
                },
            ]
        }
    ]
    console.clear()
        console.log("*******************************".green)
        console.log(`     Seleciones una opcion`.green)
        console.log("*******************************\n".green)
        const opt = await inquirer.prompt(preguntas)
        return opt
    }
const pause = async()=>{
    const pregutas = [
        {
            type:"input",
            name:"enter",
            message:`Presione ${"enter".green} para continuar`,
        }
    ]
     await inquirer.prompt(pregutas)
   
}

module.exports ={
    inquirerMenu,
    pause
}