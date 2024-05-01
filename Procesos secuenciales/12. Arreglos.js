//? Pedir 5 números y asignarlos en un arreglo 

/** Requerimientos: Datos y valores que seran asignados al arreglo. variables para el arreglo pueda funcionar
 *  Entrada: numero = "", num = "", numeros = [], numeros como un arreglo vacio
 *  Proceso: se usa .push para que se pueda agregar valores que se obtengan de la variable numero, la variable num solo es usada para
 *           la solicitud de numeros sea mas intuitiva.
 *  Salida: Se presenta el arreglo con la variable numeros que la contiene -> Junto con el mensaje Sus numeros escritos son:

 *!Pseudocodigo
 Algoritmo Arreglos
    Dimension numeros[5]
    Definir num como Entero 
	
    Escribir "Por favor ingresa 5 números:"
    
    Para num <- 1 Hasta 5 Hacer
        Escribir "Escriba el número ", num, ":"
        Leer numeros[num] 
    FinPara
    
    Escribir "Los números ingresados son:"
    Para num <- 1 Hasta 5 Hacer
        Escribir numeros[num] 
    FinPara
FinAlgoritmo
 */

let numeros = []

for (let num = 0; num < 5; num++){
    let numero = +prompt("Escriba el numero "+ (num + 1) + ":" )
    numeros.push(numero);
}

alert("Sus numeros escritos son :"+ numeros)

