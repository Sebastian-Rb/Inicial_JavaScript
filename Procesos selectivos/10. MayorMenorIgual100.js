//? Pedir al usuario un número y mostrar si es mayor, menor o igual a 100.

/*  Reqerimientos: Datos para la variable num. Uso de los signos mayor que, menor que para la solucion del problema.
    Entrada: numero=""
    Proceso: num>100, num<100, num==100, se verifica si el numero es mayor, menor o igual a 100.
    Salida: console.log acorde a la salida del proceso ->"El número es mayor a 100", "El número es menor a 100", "El número es igual a 100"
!Pseudocodigo
Algoritmo MayorMenorIgual100
    Definir num como número
    Escribir "Introduce un número"
    Leer num
    Si num>100 Entonces
        Escribir "El número es mayor a 100"
    Sino
        Si num<100 Entonces
            Escribir "El número es menor a 100"
        Sino
            Escribir "El número es igual a 100"
        FinSi
    FinSi
FinAlgoritmo
*/
let prompt = require('prompt-sync')();

let num = parseInt(prompt("Introduce un número: "));

if (num > 100) {
    console.log("El número es mayor a 100");
} else if (num < 100) {
    console.log("El número es menor a 100");
} else {
    console.log("El número ingresado es igual a 100");
}
