// Solicitar al usuario el precio de venta de un vehículo nuevo y su año de fabricación. Si el año de fabricación es anterior a 2010, aplicar un descuento del 10% sobre el precio de venta y mostrar el precio final. 

/*  Requerimientos: Precio de venta del auto y su año de fabricacion para colocarlos en variables acorde a sus datos, hacer los calculos para obtener el precio total si aplica un descuento
    Entrada: precioventa = "", añofabrica ="", descuento ="10", preciototal ="" (salida)

*/
let prompt = require('prompt-sync')();

let precioventa = parseFloat(prompt("Escriba el precio del auto nuevo: "))
let añofabrica = parseFloat(prompt("Indique el año de fabricacion: "))
let descuento = "10"
let preciototal = ""

if (añofabrica <= 2010){
    preciototal = precioventa - (precioventa * descuento / 100)
    console.log("Su auto cuenta con un descuento de 10%, el precio de su vehiculo ahora es: "+ preciototal)
}  else{
    console.log ("Su auto no cuenta con descuento por antiguedad")
}
