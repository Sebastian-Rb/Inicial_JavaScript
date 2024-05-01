//Pedir al usuario su nota en un examen y determinar si ha aprobado o reprobado, considerando que la nota mínima de aprobación es 60 puntos. 

/*  Requerimientos: Valores para la variable nota, comprobar si la nota es mayor o igual a 60 con condicional
    Entrada: nota=""
    Proceso: si nota >= 60 entonces imprimir "Usted ha aprobado el examen" 
             sino imprimir "Has reprobado, estudia más para la próxima vez"
    Salida: "Usted ha aprobado el examen" o "Has reprobado, estudia más para la próxima vez"
!Pseudocódigo
Algortimo AprobadoReprobado
    Definir nota como Entero
    Escribir "Introduce tu nota: "
    Leer nota
    Si nota >= 60 Entonces
        Escribir "Usted ha aprobado el examen"
    Sino
        Escribir "Has reprobado, estudia más para la próxima vez"
    FinSi
FinAlgoritmo
*/

let prompt = require('prompt-sync')();
let nota = parseInt(prompt("Introduce tu nota: "))

if (nota >= 60) {
    console.log("Usted ha aprobado el examen")
} else {
    console.log("Has reprobado, estudia más para la próxima vez")
}
