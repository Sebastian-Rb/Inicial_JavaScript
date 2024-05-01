// Dado un arreglo de 5 elementos indicar si el primero elemento es par y el último elemento es impar. 

/*  Requerimientos: Arreglo de 5 elementos, condicionales
    Entradas: arreglo = [5], arreglo[0], arreglo[4], condicionales
    Proceso: Se requiere condicional para saber si el primer elemento es par y el ultimo impar
    Salida: mensaje el primer elemento es par y el ultimo impar
!Pseudocodigo
Algoritmo Arreglo5
    Dimension arreglo[5]
    arreglo[1] <- 5
    arreglo[2] <- 4
    arreglo[3] <- 3
    arreglo[4] <- 2
    arreglo[5] <- 1
        Si arreglo[1] % 2 = 0 y arreglo[5] % 2 <> 0 Entonces
            Escribir "El primer elemento es par y el ultimo impar"
        Sino
            Escribir "El primer elemento no es par y el ultimo no es impar"
        FinSi
FinAlgoritmo
*/
let prompt = require('prompt-sync')();

let arreglo = [5, 4, 3, 2, 1];

if (arreglo[0] % 2 == 0 && arreglo[4] % 2 != 0) {
    console.log("El primer elemento es par y el ultimo impar");
}
else {
    console.log("El primer elemento no es par y el ultimo no es impar");
}
