//? Solicitar al usuario un número y mostrar si es divisible por 2. 

/*  Requerimientos: Datos para la variable num. Operaciones para determinar si el número es divisible por 2.
    Entrada: numero=""
    Proceso: numero%2==0, se verifica que la division del numero entre 2 sea exacta, si es asi se muestra que el numero es divisible por 2, si no se muestra que no es divisible por 2.
    Salida: "El número es divisible por 2" o "El número no es divisible por 2"
!Pseudocódigo:
Algortimo DivisiblePor2
    Definir num Como Entero
    Escribir "Introduce un número: "
    Leer num
    Si num%2==0 Entonces
        Escribir "El número es divisible por 2"
    Sino
        Escribir "El número no es divisible por 2"
    FinSi
FinAlgoritmo
*/  
let prompt = require('prompt-sync')();

let num = parseInt(prompt("Introduce un número: "));
if (num % 2 == 0) {
    console.log("El número es divisible por 2");
} else {
    console.log("El número no es divisible por 2");
}