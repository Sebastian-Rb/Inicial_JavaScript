// Solicitar al usuario un número y mostrar si es un número de un solo dígito.

/*  Requerimientos: Datos para la variable numero, operadores logicos.
    Entrada: numero=""
    Proceso: numero>=0, numero<=9, se verifica si el numero es de un solo digito, se compara el numero con 0 y 9 con el operador lógico "y".
    Salida: console.log acorde a la salida del proceso ->"El número ingresado es de un solo dígito", "El número ingresado no es de un solo dígito"
!Pseudocodigo
Algoritmo Numero1digito
    Definir numero como número
    Escribir "Introduce un número"
    Leer numero
    Si numero>=0 Y numero<=9 Entonces
        Escribir "El número ingresado es de un solo dígito"
    Sino
        Escribir "El número ingresado no es de un solo dígito"
    FinSi
FinAlgoritmo
*/
let prompt = require('prompt-sync')();

let numero = prompt("Introduce un número: ");
numero = parseInt(numero);

if (numero >= 0 && numero <= 9) { // && es el operador lógico "y"
    console.log("El número ingresado es de un solo dígito");
} else {
    console.log("El número ingresado no es de un solo dígito");
}