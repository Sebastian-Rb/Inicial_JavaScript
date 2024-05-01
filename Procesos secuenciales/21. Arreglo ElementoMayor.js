// Dado un arreglo de 3 elementos indicar cuál de los elementos es el mayor 

/*  Requerimientos: Arreglo de 3 elementos, condicionales
    Entradas: arreglo = [3], arreglo[0], arreglo[1], arreglo[2], condicionales
    Proceso: Se requiere condicional if y else para saber cual de los elementos es el mayor a partir de signos de comparacion
    Salida: mensaje con el elemento mayor
!Pseudocodigo
Algoritmo ArregloElementoMayor
    Dimension arreglo[3]
    arreglo[1] <- 5
    arreglo[2] <- 4
    arreglo[3] <- 3
        Si arreglo[1] > arreglo[2] y arreglo[1] > arreglo[3] Entonces
            Escribir "El primer elemento es el mayor"
        Sino
            Si arreglo[2] > arreglo[1] y arreglo[2] > arreglo[3] Entonces
                Escribir "El segundo elemento es el mayor"
            Sino
                Escribir "El tercer elemento es el mayor"
            FinSi
        FinSi
FinAlgoritmo
*/
let prompt = require('prompt-sync')();

let arreglo = [5, 4, 3];

if (arreglo[0] > arreglo[1] && arreglo[0] > arreglo[2]) {
    console.log("El primer elemento es el mayor");
} else {
    if (arreglo[1] > arreglo[0] && arreglo[1] > arreglo[2]) {
        console.log("El segundo elemento es el mayor");
    } else {
        console.log("El tercer elemento es el mayor");
    }
}