require("colors")

const mostrarMenu = ()=>{
    return new Promise((resolve, reject) => {
        console.clear()
        console.log("*******************************")
        console.log(`     Seleciones una opcion`)
        console.log("*******************************")
        console.log(`${"1.".green }   Crear tarea`)
        console.log(`${"2.".green }   Listar tareas`)
        console.log(`${"3.".green }   Listar tares completadas`)
        console.log(`${"4.".green }   Listar tareas pendientes`)
        console.log(`${"5.".green }   Completar tarea(s)`)
        console.log(`${"6.".green }   Borrar tarea`)
        console.log(`${"0.".green }   Salir \n`)
        const readline = require("readline").createInterface({
            input:process.stdin,
            output:process.stdout
        })
        readline.question("seleccion una opcion:" , (opt)=>{
            resolve(opt)
            readline.close()
        })
        
    })
}
const pause = () =>{
    return new Promise((resolve, reject) => {     
        const readline = require("readline").createInterface({
            input:process.stdin,
            output:process.stdout
        })
        readline.question(`\npresione ${"ENTER".green} para continuar\n` , (opt)=>{
            console.log({opt})
            readline.close()
            resolve()
        })
    })
}

module.exports = { 
    mostrarMenu,
    pause
}