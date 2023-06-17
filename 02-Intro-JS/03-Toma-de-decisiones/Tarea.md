# Tarea: Toma de decisiones con JavaScript

## Operadores

### Instrucciones

Juega con los operadores. Aquí hay una sugerencia de un programa que puede implementar.
Tiene un conjunto de estudiantes de dos sistemas de calificación diferentes.

<strong> Primer sistema de calificación:</strong><br/>
Un sistema de calificación se define como calificaciones del 1 al 5, donde 3 y más significa que aprueba el curso.<br/>
<strong>Segundo sistema de calificación:</strong><br/>
El otro sistema de calificaciones tiene las siguientes calificaciones A, A-, B, B-, C, C- donde A es la calificación más alta y C es la calificación más baja para aprobar.<br/>
<strong>La tarea</strong><br/>
Dada la siguiente matriz allStudents que representa a todos los estudiantes y sus calificaciones, construya una nueva matriz StudentsWhoPass que contenga a todos los estudiantes que aprobaron.<br/>

> SUGERENCIA, use un bucle for y if ... else y operadores de comparación:
```JavaScript
let allStudents = [
  'A',
  'B-'
  1,
  4
  5,
  2
]
let studentsWhoPass = [];

```
## Rúbrica

| Criterios | Ejemplar | Adecuado | Necesita mejorar |
| -------- | ------------------------------ | ----------------------------- | ------------------------------- |
| | Se presenta la solución completa | Se presenta solución parcial | Se presenta solución con errores |

### Nueva matriz

```JavaScript
let allStudents = [
    ['A', 'B-', 1, 4],
    ['A-', 'B-', 5, 2],
    ['B-', 'C', 4, 3],
    ['C-', 'A', 2, 1],
    ['B', 'B-', 3, 3]
  ];
  
```

### Sistemas de calificación

```JavaScript
// Iterar sobre cada estudiante en la matriz allStudents
  for (let i = 0; i < allStudents.length; i++) {
    let student = allStudents[i];
    
    // Verificar si el estudiante aprueba en el primer sistema de calificación
    let system1Pass = student.every(grade => grade >= 3);
    
    // Verificar si el estudiante aprueba en el segundo sistema de calificación
    let system2Pass = student.every(grade => ['A', 'A-', 'B', 'B-', 'C', 'C-'].includes(grade));
    
    // Los estudiantes aprueban en cualquiera de los sistemas, se agregaran a studentsWhoPass
    if (system1Pass && system2Pass) {
      studentsWhoPass.push(student);
    };
  };
  
  // Imprimir la matriz studentsWhoPass
  for (let i = 0; i < studentsWhoPass.length; i++) {
    console.log(studentsWhoPass[i]);
  };
```
La matriz allStudents contiene las calificaciones de cada estudiante. Recorremos cada estudiante en allStudents y verificamos si aprueba en ambos sistemas de calificación. Utilizamos los métodos every para verificar si todas las calificaciones cumplen con los requisitos de aprobación en cada sistema. Si el estudiante aprueba en ambos sistemas, lo agregamos a la matriz studentsWhoPass. Al final, imprimimos los estudiantes que aprobaron.

#### Esta es la evidencia que corresponde a la <a href="https://github.com/microsoft/Web-Dev-For-Beginners/blob/main/2-js-basics/3-making-decisions/translations/assignment.es.md">tarea</a> de la lección <a href="https://github.com/microsoft/Web-Dev-For-Beginners/blob/main/2-js-basics/3-making-decisions/translations/README.es.md">Conceptos básicos de JavaScript: Toma de decisiones</a> del curso <a href="https://github.com/microsoft/Web-Dev-For-Beginners">WEB DEVELOPMENT FOR BEGINNERS</a> de Microsoft.