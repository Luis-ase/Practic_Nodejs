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

module.exports ={
    inquirerMenu,
    pause,
    leerinput
};