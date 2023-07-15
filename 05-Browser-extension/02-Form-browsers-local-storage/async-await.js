// Funcion que genera una promesa
function promiseTimeout(ms) {
    return new Promise(
        (resolve, reject) => {
            setTimeout(resolve, ms);
        }
    );
}

// Funcion asincronas
// Retornara una repuesta despues del tiempo indicado en ms.
async function simularOperacioLarga(){
    console.log("Iniciando proceso...")
    await promiseTimeout(10000);
    return "Proceso terminado"// despues de que termine el tiempo se emitira este mensaje
}

async function run(){
    const answer = await simularOperacioLarga();
    console.log("Respuesta en 2° plano: " + answer);
}

run();
console.log("run() libero su ejecución")

/* RESPUESTA
Iniciando proceso...
run() libero su ejecución
Respuesta en 2° plano: Proceso terminado 
*/
