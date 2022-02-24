
// Tabla de multiplicar uso del ciclo FOR
let numero = prompt("Realizaremos una TABLA DE MULTIPLICAR: Introduce un número: ");
let i=1;
console.log("TABLA DE MULTIPLICAR DEL NUMERO: " + numero);
while ( i<=10) {
    resultado = numero * i;
    console.log(numero + " * " + i + " = " + resultado);
    i++;
}

//  Calculo de cápital obtenido uso del ciclo FOR
console.log("REALIZAREMOS EL CALCULO DE INTERES DE UNA INVERSIÓN")
let cantidadInvertir = parseInt(prompt("REALIZAREMOS EL CALCULO DE INTERES DE UNA INVERSIÓN" + "\n\n Cantidad que deseas invertir"));
let interesAnual= 0.10;
let años = 10;

console.log("CANTIDAD INVERTIDA  " + cantidadInvertir );
console.log("INTERES ANUAL " + interesAnual);
for (let j=1; j<=10; j++){
    
    cantidadInvertir = (cantidadInvertir * interesAnual) + cantidadInvertir;
    console.log( "  CAPITAL + INTERES AÑO  " + j  + " =  " + cantidadInvertir);
    
}