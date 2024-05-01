/*  Requerimientos: Datos para las variables precio, descuento, preciototal, operadores matematicos.
    Entrada: precio="0", descuento="0", preciototal="0"(proceso)
    Proceso: precio - (precio * descuento / 100), se calcula el precio total a pagar restando el descuento
    Salida: console.log acorde a la salida del proceso ->"El precio total a pagar incluyendo el descuento es de: "+preciototal
!Pseudocodigo
Algoritmo PrecioDescuento
    Definir precio, descuento, preciototal como Real
    Escribir "Introduce el precio del producto: "
    Leer precio
    Escribir "Introduce el porcentaje de descuento aplicado: "
    Leer descuento
    preciototal <- precio - (precio * descuento / 100)
    Escribir "El precio total a pagar incluyendo el descuento es de: " preciototal
FinAlgoritmo
*/

let prompt = require('prompt-sync')()
let precio = parseFloat(prompt("Introduce el precio del producto: "))
let descuento = parseFloat(prompt("Introduce el porcentaje de descuento: "))

let preciototal = precio - (precio * descuento / 100)

console.log("El precio total a pagar  el descuento es de: "+preciototal)