# Tarea: Funciones y Métodos
Cree diferentes funciones, tanto funciones que devuelvan algo como funciones que no devuelvan nada.
Vea si puede crear una función que tenga una combinación de parámetros y parámetros con valores predeterminados.

## Rúbrica

Criterios | Ejemplar | Adecuado | Necesita mejorar
--- | --- | --- | - |
|| La solución se ofrece con dos o más funciones de buen rendimiento con diversos parámetros | La solución de trabajo se ofrece con una función y pocos parámetros | La solución tiene errores 

### Función que devuelve un valor

Función que multiplica el valor de a por b y devolvera el resultado de esta operación
```JavaScript
function multi(a, b){
  return a * b;
};

const result = multi(8, 4);
console.log(result);
```
Esta función devuelve este resultado en consola:
```Console
32
```

### Función que no devuelve nada

Está es una función que no devuelve nada solo emite lo que se le indica.
```JavaScript
function saludar(nombre){
  console.log(`Hola, ${nombre}`);
};

saludar('Pedro');
```
Emite este mensaje:
```Console
Hola, Pedro
```

### Función con parámetros y valores predeterminados

Está función multiplica el valor de a por el valor de b que tiene un valor predeterminado de 1, pero en el primer resultado el valor de b se sustituye al momento de definir la la variable de este resultado y en el segundo resultado lo hace de forma normal respetando el valor predeterminado de b.
```JavaScript
function multiplicar(a, b = 1) {// b tiene un valor prederteminado
  return a * b;
}

const resultado1 = multiplicar(5, 2);
console.log(resultado1);

const resultado2 = multiplicar(3);
console.log(resultado2);
```
Devuelve lo siguiente:
```Console
resultado1 = 10
resultado2 = 3
```

#### Esta es la evidencia que corresponde a la <a href="https://github.com/microsoft/Web-Dev-For-Beginners/blob/main/2-js-basics/2-functions-methods/translations/assignment.es.md">tarea</a> de la lección <a href="https://github.com/microsoft/Web-Dev-For-Beginners/blob/main/2-js-basics/2-functions-methods/translations/README.es.md">Conceptos básicos de JavaScript: Funciones y métodos</a> del curso <a href="https://github.com/microsoft/Web-Dev-For-Beginners">WEB DEVELOPMENT FOR BEGINNERS</a> de Microsoft.