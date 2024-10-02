import * as rs from "readline-sync";


const longitud: number = 6;
const arreglo1: number[] = new Array(longitud);
const arreglo2: number[] = new Array(longitud);
const resultado: number[] = new Array(longitud);


for (let i = 0; i < longitud; i++) {
    arreglo1[i] = rs.questionInt("ingrese los primeros numeros: ");
}

for (let i = 0; i < longitud; i++) {
    arreglo2[i] = rs.questionInt("ingrese los segundos numeros: ")
}

for (let i = 0; i < longitud; i++) {
    resultado[i] = arreglo1[i] + arreglo2[i];
}

console.log("Resultado de la suma de los arreglos: ");
console.log(resultado);


