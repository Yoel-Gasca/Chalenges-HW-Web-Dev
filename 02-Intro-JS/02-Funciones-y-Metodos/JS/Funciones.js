/* Para que una función sea más reutilizable, a menudo querrá pasarle información. 
Si consideramos nuestro ejemplo de displayGreeting anterior, solo mostrará ¡Hola, mundo!.
No es la función más útil que uno podría crear. Si queremos hacerlo un poco más flexible, 
como permitir que alguien especifique el nombre de la persona a saludar, podemos agregar un parámetro.
Un parámetro (también llamado a veces argumento), es información adicional enviada a una función.

Los parámetros se enumeran en la parte de definición entre paréntesis y están separados por comas así:*/
function name(param, param2, param3) {
    // Codigo de la funcion
};
//Podemos actualizar nuestro displayGreeting para aceptar un nombre y mostrarlo.
function displayGreeting(name) {
  const message = `¡Hola, ${name}!`;
  console.log(message);
};

// Cuando queremos llamar a nuestra función y pasar el parámetro, lo especificamos entre paréntesis.

displayGreeting('Paco');
// dice "¡Hola, Paco!" cuando ejecutas el comando 

/* Valores predeterminados */

    /*Para proporcionar un valor predeterminado a un parámetro, lo configuramos de la misma manera que
    configuramos un valor para una variable: parameterName = 'defaultValue'. Para ver un ejemplo completo:*/
    function displayGreeting(name, salutation='Hola') {
        console.log(`${salutation}, ${name}`);
    };

    // Cuando llamamos a la función, podemos decidir si queremos establecer un valor para el "saludo".
    displayGreeting('Paco');
    // dice "Hola, Paco"

    displayGreeting('Paco', 'Hola');
    // dice "Hola, Paco"

    /*También existe el concepto de _ valores predeterminados_ en los parámetros.
    Esto significa que, si no se pasa un argumento a un parámetro durante la invocación, 
    el parámetro asumirá el valor predeterminado. Considere el siguiente código usando un valor predeterminado:*/
    function add5(firstValue, secondValue = 5) {
        return firstValue + secondValue;
    };

    //La invocación de la función anterior podría verse así:
    add5 (4) // devuelve 9
    add5 (4,2) // devuelve 6



/* Parámetros */

    // Los parámetros se enumeran en la parte de definición entre paréntesis y están separados por comas así:
    (param, param2, param3);

    /* Aquí define qué tarea debe realizar la función. Una función puede devolver algo o no. Si una función 
    devuelve algo, entonces se usa la palabra clave return. La palabra clave return espera un valor o 
    referencia de lo que se devuelve así:*/
    return myVariable;

    //Un ejemplo más completo puede verse así:
    function add(firstValue, secondValue) {
    let sum = firstValue + secondValue;
    return sum;
    }
    //En el código anterior, se devuelve la variable sum.

/* Invocación */
    /*Los valores de los argumentos se vinculan a los parámetros correspondientes a su posición. 
    La función add() introducido se puede invocar de la siguiente manera:*/
    let result = add(1, 3);
    console.log(result); // imprime 4
