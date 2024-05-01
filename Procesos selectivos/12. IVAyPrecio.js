// Pedir al usuario el monto total de una factura y el porcentaje de IVA aplicado. Luego, calcular y mostrar el monto total a pagar incluyendo el IVA. 
/*  Requerimientos: Datos para las variables precio, iva, preciototal, operadores matematicos. El iva actualmente es de 15%
    Entrada: precio="0", iva="0", preciototal="0"(proceso)
    Proceso: precio + (precio * iva / 100), se calcula el precio total a pagar incluyendo el IVA
    Salida: console.log acorde a la salida del proceso ->"El precio total a pagar incluyendo el IVA es de: "+preciototal
!Pseudocodigo
Algoritmo PrecioIva
    Definir precio, iva, preciototal como Real
    Escribir "Introduce el precio del producto: "
    Leer precio
    Escribir "Introduce el porcentaje de IVA aplicado: "
    Leer iva
    preciototal <- precio + (precio * iva / 100)
    Escribir "El precio total a pagar incluyendo el IVA es de: " preciototal
FinAlgoritmo
*/

let prompt = require('prompt-sync')()
let precio = parseFloat(prompt("Introduce el precio del producto: "))
let iva = parseFloat(prompt("Introduce el porcentaje de IVA aplicado: "))

let preciototal = precio + (precio * iva / 100)

console.log("El precio total a pagar incluyendo el IVA es de: "+preciototal)
