//? Pedir al usuario un número y mostrar si es múltiplo de 3. 

/*  Requrimientos: Datos numericos para la variable numero y luego comparar con operadores matematicos para saber si es multiplo de 3
    Entrada: numero=""
    Proceso: Operacion matematica -> numero % 3 == 0 para saber si es multiplo de 3, el % dara el residuo de la multiplicacion, si es 0 es multiplo de 3
             De lo contrario se mostrara un mensaje de salida indicando que no es multiplo de 3
    Salida: Acorde al proceso "El numero es multiplo de 3", "El numero no es multiplo de 3"
!Pseudocodigo
Algoritmo MultiploDe3
    Definir numero Como Entero
    Escribir "Ingrese un numero"
    Leer numero
    Si numero % 3 == 0 Entonces
        Escribir "El numero es multiplo de 3"
    SiNo 
        Escribir "El numero no es multiplo de 3"
    FinSi
FinAlgoritmo
*/
let prompt = require('prompt-sync')();

let numero = parseInt(prompt("Ingrese un numero: "))
if (numero % 3 == 0) {
    console.log(numero+" es multiplo de 3")
} else {
    console.log(numero+" no es multiplo de 3")
}
