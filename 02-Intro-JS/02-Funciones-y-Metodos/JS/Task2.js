// Tarea 2: Funciones y métodos

// Función que devuelve un valor
function multi(a, b){
  return a * b;
};

const result = multi(8, 4);
console.log(result);

// Función que no devuelve nada
function saludar(nombre){
  console.log(`Hola, ${nombre}`);
};

saludar('Pedro');

// Función con parámetros y valores predeterminados
function multiplicar(a, b = 1) {// b tiene un valor prederteminado
  return a * b;
}

const resultado1 = multiplicar(5, 2);
console.log(resultado1);

const resultado2 = multiplicar(3);
console.log(resultado2);