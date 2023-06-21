# Hacer bucle en una matriz

## Instrucciones

Cree un programa que enumere cada tercer número entre 1 y 20 e imprimalo en la consola.

> SUGERENCIA: use un bucle for y modifique la expresión-iteración

## Rúbrica

| Criterios | Ejemplar | Adecuado | Necesita mejorar |
| -------- | --------------------------------------- | ------------------------ | ------------------------------ |
| | El programa se ejecuta correctamente y está comentado | Programa no comentado | El programa está incompleto o con errores |

<strong>Programa para enumerar cada tercer número entre 1 y 20 e imprimirlo en la consola:</strong><br/>

El bucle for se utiliza para la iteración del 1 al 20 y hay incrementos de 3 e imprimira estos en consola.
```JavaScript
for (let i = 1; i < 20; i += 3){
    console.log(i);
}
```
Al ejecutar en consola se imprime lo siguiente:
```Console
1
4
7
10
13
16
19
```
Cada uno de estos números representa cada tercer numero iniciando despues del 1 y con un limite hasta el numero 20.

#### Esta es la evidencia que corresponde a la <a href="https://github.com/Yoel-Gasca/Web-Dev-For-Beginners/blob/main/2-js-basics/4-arrays-loops/translations/assignment.es.md">tarea</a> de la lección <a href="https://github.com/Yoel-Gasca/Web-Dev-For-Beginners/blob/main/2-js-basics/4-arrays-loops/translations/README.es.md">Conceptos básicos de JavaScript: Arreglos y Bucles</a> del curso <a href="https://github.com/microsoft/Web-Dev-For-Beginners">WEB DEVELOPMENT FOR BEGINNERS</a> de Microsoft.