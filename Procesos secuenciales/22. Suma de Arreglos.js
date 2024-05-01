// Dado un arreglo de 5 elementos presentar la suma de dichos elementos 

/*  Requerimientos: Arreglo de 5 elementos, suma
    Entradas: arreglo = [5], arreglo[0], arreglo[1], arreglo[2], arreglo[3], arreglo[4], suma
    Proceso: Se requiere un ciclo for para recorrer el arreglo y sumar los elementos
    Salida: mensaje con la suma de los elementos 
!Pseudocodigo
Algoritmo SumaArreglo
    Dimension arreglo[5]
    arreglo[1] <- 5
    arreglo[2] <- 4
    arreglo[3] <- 3
    arreglo[4] <- 2
    arreglo[5] <- 1
    suma <- 0 //variable vacia para sumar los elementos
        Para i <- 1 Hasta 5 Con Paso 1 Hacer
            suma <- suma + arreglo[i]
        FinPara
    Escribir "La suma de los elementos es: ", suma
*/
let prompt = require('prompt-sync')();

let arreglo = [5, 4, 3, 2, 1]; 
let suma = 0;

for (let i = 0; i < 5; i++) {
    suma += arreglo[i];
}

console.log("La suma de los elementos es: ", suma);

// El resultado es mas distinto si se usan elementos alfanumericos en el arreglo, es mas sencillo y rapido de hacer con numeros, ademas de cumplir con el enunciado