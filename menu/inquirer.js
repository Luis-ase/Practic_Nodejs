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
                    name:`${"1.".green} Crear Tarea`
                },
                {
                    value:2,
                    name:`${"2.".green} Lista de tarea`
                },
                {
                    value:3,
                    name:`${"3.".green} Listar tares completadas`
                },
                {
                    value:4,
                    name:`${"4.".green} Listar tareas pendientes`
                },
                {
                    value:5,
                    name:`${"5.".green} Completar tarea(s)`
                },
                {
                    value:6,
                    name:`${"6.".green} Borrar tarea`
                },
                {
                    value:"0",
                    name:`${"0.".green} Salir \n`
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
const leerinput = async( message )=>{
    const question = [
        {
            type:"input",
            name:"descrip",
            message,
            validate(value){
                if (value.length ===0){
                    return `Por favor  ingrese un valor`;
                }
                return true;
            }

        }

    ];

   const desc = await inquirer.prompt(question);
    return desc;
};

const listadoTareasBorrar = async(tarea =[])=>{
    const choices = tarea.map((e,index) => {
        let idx = `${index +1}.`.green
        return {
            value:e.id, 
            name : `${idx} ${e.desc}`
        }
    })
    choices.unshift({
        value:"0",
        name:"0.".green + " Cancelar"
    })
    

    const question =[
        {
            type:"list",
            name:"delete",
            message:`Que tarea quiere ${"BORRAR".red} `,
            choices 
        }
    ]

    const id  = await inquirer.prompt(question)
    return id 
}

const confirmarEliminacion = async(message)=>{
    const question = [
        {
            type:"confirm",
            name:"ok",
            message
        }
    ]
    const id  = await inquirer.prompt(question)
    return id
}

const listadoTareasCompleatar = async(tarea =[])=>{
    const choices = tarea.map((e,index) => {
        let idx = `${index +1}.`.green
        return {
            value:e.id, 
            name : `${idx} ${e.desc}`,
            checked: e.completadoEn ? true: false
        }
    })
    

    const question =[
        {
            type:"checkbox",
            name:"ids",
            message:`Selecciones`,
            choices 
        }
    ]

    const id  = await inquirer.prompt(question)
    return id 
}

module.exports ={
    inquirerMenu,
    pause,
    leerinput,
    listadoTareasBorrar,
    confirmarEliminacion,
    listadoTareasCompleatar
};