/* -Bucles- */

// Estructurar el arreglo
const nombres = ["Steve", "Bill", "Linus"];// undefined -> No existe
//                  0       1       2        si se llega a exeder el limite 
let indice = 0;

/* -For- */
// Hace un bucle un numero conocido de veces.
// simplifica la definicion de una variable, la cual va a validar la condicion PARA ejecutar el incremento 
// de la iteracion
for(let indice = 0; indice < nombres.length; indice++){
//  |   variable |       condicion     |  ejecucion |
    const nombre = nombres[indice];
    console.log(nombre);
}
// Esto imprimira lo siguiente
// Steve, Bill y Linus

/* -While- */
// Llama a una funcion que devuelve falso o nulo cuando se completa.
// Recorre el arreglo para imprimir los objetos que contiene el arreglo
while(indice <= nombres.length){ // Si se marca el <= en algun momento va a sobrepasar el limite del arreglo 
    //marcando un valor no definido (undefined)
    const nombre = nombres[indice];
    console.log(nombre);
    indice++;
}
// Esto imprimira lo siguiente:
// Steve, Bill, Linus y undefined

/* -For of- */
// Itera a través de una coleccion de elementos
// Este es una variacion del for pero en este lo que hace es que para cada objeto de la coleccion
// va a ejecutar algo
for (const nombre of nombres) {
    console.log(nombre);
}
// Esto imprimira lo mismo que el for anterior.
// Steve, Bill y Linus.
