/* -Matrices- */

//La sintaxis de una matriz es un par de corchetes.

let myArray = [];

// Esta es una matriz vacía, pero las matrices se pueden declarar ya pobladas con datos. 
// Varios valores en una matriz están separados por una coma.
let iceCreamFlavors = ["Chocolate", "Strawberry", "Vanilla", "Pistachio", "Rocky Road"];
//                          0             1           2           3             4

// A los valores de la matriz se les asigna un valor único llamado índice, 
// un número entero que se asigna en función de su distancia desde el principio de la matriz. 
// En el ejemplo anterior, el valor de cadena "Chocolate" tiene un índice de 0 y el índice de "Rocky Road" es 4. 
// Utilice el índice entre corchetes para recuperar, cambiar o insertar valores de matriz.

iceCreamFlavors[2]; //"Vanilla"

// Puede aprovechar el índice para cambiar un valor, como este:
iceCreamFlavors[4] = "Butter Pecan"; //Se cambió "Rocky Road" a "Butter Pecan"

// Y puede insertar un nuevo valor en un índice dado como este:
iceCreamFlavors[5] = "Cookie Dough"; //Añadida "Cookie Dough"

console.log(iceCreamFlavors);

iceCreamFlavors.length;// Es 6

// esto imprime ['Chocolate', 'Strawberry', 'Vanilla', 'Pistachio', 'Butter Pecan', 'Cookie Dough' ]