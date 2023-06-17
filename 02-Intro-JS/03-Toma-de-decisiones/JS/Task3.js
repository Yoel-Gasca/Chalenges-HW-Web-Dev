let allStudents = [
    ['A', 'B-', 1, 4],
    ['A-', 'B-', 5, 2],
    ['B-', 'C', 4, 3],
    ['C-', 'A', 2, 1],
    ['B', 'B-', 3, 3]
  ];
  
  let studentsWhoPass = [];
  
  // Iterar sobre cada estudiante en la matriz allStudents
  for (let i = 0; i < allStudents.length; i++) {
    let student = allStudents[i];
    
    // Verificar si el estudiante aprueba en el primer sistema de calificación
    let system1Pass = student.every(grade => grade >= 3);
    
    // Verificar si el estudiante aprueba en el segundo sistema de calificación
    let system2Pass = student.every(grade => ['A', 'A-', 'B', 'B-', 'C', 'C-'].includes(grade));
    
    // Si el estudiante aprueba en ambos sistemas, agregarlo a studentsWhoPass
    if (system1Pass && system2Pass) {
      studentsWhoPass.push(student);
    };
  };
  
  // Imprimir la matriz studentsWhoPass
  for (let i = 0; i < studentsWhoPass.length; i++) {
    console.log(studentsWhoPass[i]);
  };