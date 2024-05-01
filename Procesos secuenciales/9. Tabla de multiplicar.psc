Algoritmo Tabla_multiplicar2
	Definir numero, solucion Como Entero
	Escribir "Escriba un numero para observar su tabla de multiplicar"
	Leer numero
	Para multiplicador <- 1 Hasta 10 Hacer
		solucion <- numero * multiplicador
		
		Escribir numero, "x", multiplicador, "=", solucion
	FinPara
FinAlgoritmo
