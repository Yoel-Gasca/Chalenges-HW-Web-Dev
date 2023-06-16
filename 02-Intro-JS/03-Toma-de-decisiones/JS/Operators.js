/*  -Operadores-
<	Mayor que: compara dos valores y devuelve el tipo de datos booleano true si el valor del lado derecho es mayor
    que el del izquierdo.	
    5 < 6 // true
<=	Mayor o igual que: compara dos valores y devuelve el tipo de datos booleano true si el valor del lado derecho
    es mayor o igual que el del lado izquierdo	
    5 <= 6 // true
>	Menor que: compara dos valores y devuelve el tipo de datos booleano true si el valor del lado izquierdo es 
    mayor que el del derecho	
    5 > 6 // false
=>	Menor o igual que: compara dos valores y devuelve el tipo de datos booleano true si el valor del lado izquierdo
    es mayor o igual que el del lado derecho	
    5 => 6 // false
===	Igualdad estricta: compara dos valores y devuelve el tipo de datos booleano true si los valores de la derecha 
    y la izquierda son iguales Y son del mismo tipo de datos	
    5 === 6 // false
!==	Desigualdad: compara dos valores y devuelve el valor booleano opuesto de lo que devolvería un operador de
    igualdad estricta	
    5 !== 6 // true

*/

/* -Declaraciones Condicionales- */

// La sentencia if ejecutará código entre sus bloques si la condición es verdadera

if (condition){
    //La condición era verdadera. Se ejecutará el código de este bloque.
};

// Los operadores lógicos se utilizan a menudo para formar la condición.
function money() {
    let currentMoney;
    let laptopPrice;

    if (currentMoney >= laptopPrice){
        //La condición era verdadera. Se ejecutará el código de este bloque.
        console.log("Getting a new laptop!");
    };
};

// La declaración else ejecutará el código entre sus bloques cuando la condición sea falsa.
// Es opcional con una declaración if.
function buyProduct(){
    let currentMoney;
    let laptopPrice;

    if (currentMoney >= laptopPrice){
        //La condición era verdadera. Se ejecutará el código de este bloque.
        console.log("Getting a new laptop!");
    } else{
        //La condición era verdadera. Se ejecutará el código de este bloque.
        console.log("Can't afford a new laptop, yet!");
    };
};

/* -Operadores lógicos y booleanos- */

/* Las decisiones pueden requerir más de una comparación y se pueden unir con 
    operadores lógicos para producir un valor booleano.
&& AND lógico: compara dos expresiones booleanas. Devuelve verdadero solo si ambos lados 
    son verdaderos	
    (5 > 6) && (5 < 6 ) //Un lado es falso, el otro es verdadero. Devuelve falso
! NOT lógico: Devuelve el valor opuesto de una expresión booleana
	!(5 > 6) // 5 no es mayor que 6, pero "!" devolverá verdadero
*/

//Los operadores lógicos se pueden utilizar para formar condiciones en sentencias if..else.
function logicMoney(){
    let currentMoney;
    let laptopPrice;
    let laptopDiscountPrice = laptopPrice - (laptopPrice * .20); //Precio del portátil al 20% de descuento

    if (currentMoney >= laptopPrice || currentMoney >= laptopDiscountPrice){
        //La condición era verdadera. Se ejecutará el código de este bloque.
        console.log("Getting a new laptop!");
    } else {
        //La condición era verdadera. Se ejecutará el código de este bloque.
        console.log("Can't afford a new laptop, yet!");
    };

};

// Hasta ahora has visto cómo si puedes usar una instrucción if...else para crear 
// lógica condicional. Cualquier cosa que entre en un if debe evaluarse como verdadero / falso. 
// Utilizando el operador ! Puede negar la expresión. Se vería así:
if (!condition) {
        // se ejecuta si la condición es falsa
    } else {
        // se ejecuta si la condición es verdadera
    };

/* -Expresiones ternarias- */

// If...else no es la única forma de expresar la lógica de decisión. También puede usar algo
// llamado operador ternario. La sintaxis tiene el siguiente aspecto:
let variable = condition ? firstNumber: secondNumber;

// A continuación, se muestra un ejemplo más tangible:
function nums(){
    let firstNumber = 20;
    let secondNumber = 10
    let biggestNumber = firstNumber > secondNumber ? firstNumber: secondNumber;
};

// La expresión ternaria es solo una forma compacta de escribir el siguiente código:
let biggestNumber;
if (firstNumber > secondNumber) {
  biggestNumber = firstNumber;
} else {
  biggestNumber = secondNumber;
}
