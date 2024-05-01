//? Pedir dos nombres e indicar si son iguales, si el primer nombre es mayor que el segundo o menor que el segundo

/*  Requerimientos: Datos alfanumericos para la variable nombres y luego comparar con operadores matematicos para saber si son mayores o menores
    Entrada: nombre1="", nombre2=""
    Proceso: Comparacion -> nombre1 >= nombre2, nombre1 <= nombre2, en caso de ser iguales una mensaje de salida lo indicara
    Salida: Acorde al proceso "El nombre 1 es mayor que el nombre 2", "El nombre 1 es menor que el nombre 2", "Los nombres son iguales" 
!Pseudocodigo
Algoritmo NomIgual_Diferente
    Definir nombre1, nombre2 Como Caracter
    Escribir "Ingrese el primer nombre"
    Leer nombre1
    Escribir "Ingrese el segundo nombre"
    Leer nombre2
    Si nombre1 > nombre2 Entonces
        Escribir "El nombre" nombre1+" es mayor que el nombre "+nombre2
    SiNo 
        Escribir "El nombre" nombre1 +" es menor que el nombre "+ nombre2
    FinSi
FinAlgoritmo
*/
let prompt = require('prompt-sync')();

let nombre1 = prompt("Ingrese el primer nombre: ")
let nombre2 = prompt("Ingrese el segundo nombre: ")

if (nombre1 > nombre2) {
    console.log("El nombre "+nombre1 ,"es mayor que el nombre " +nombre2)
} else {
    console.log("El nombre "+nombre1 ,"es menor que el nombre " +nombre2)
}