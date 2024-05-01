//? Solicitar al usuario un carácter y mostrar si es una vocal o consonante. 

/*  Requerimientos: Caracteres a comparar los cuales deben ser en minusculas, luego se debe comparar si es una vocal o consonante por medio de condicionales
    Entrada: caracter=""
    Proceso: Comparacion entre consonante y vocal -> para la comprobacion de vocales es una comparacion para cada vocal a,e,i,o,u, se usa el operador logico ==
             De lo contrario devuelve un mensaje en consola de que es una consonante. 
    Salida: mensaje en consola si es vocal o consonante
!Pseudocodigo
Algoritmo Vocal_o_Consonante
    Definir caracter Como Caracter
    Escribir "Ingrese un caracter"
    Leer caracter
    Si caracter == "a" O caracter == "e" O caracter == "i" O caracter == "o" O caracter == "u" Entonces
        Escribir "Es una vocal"
    SiNo
        Escribir "Es una consonante"
    FinSi
FinAlgoritmo
*/
let prompt = require('prompt-sync')();
let caracter = prompt("Ingrese un caracter: ")

if (caracter == "a" || caracter == "e" || caracter == "i" || caracter == "o" || caracter == "u") {
    console.log("Su caracter es una vocal")
} else {    
    console.log("Su caracter es una consonante")
}