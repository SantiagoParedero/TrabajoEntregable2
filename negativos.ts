import * as rs from "readline-sync";
let tamanoArreglo: number = rs.questionInt("Ingrese un tamano:");
let arregloNumeros: number[] = new Array(tamanoArreglo)
let positivos: number = 0;
let negativos: number = 0;
let ceros: number = 0;

for (let i = 0; i < tamanoArreglo; i++) {
    arregloNumeros[i] = rs.questionInt("ingrese un numero para el arreglo: ");

    if (arregloNumeros[i] > 0) {
        positivos++
    } else if (arregloNumeros[i] < 0) {
        negativos++
    } else {
        ceros++
    }
}
console.log(` hay ${positivos} positivos , ${negativos} negativos , ${ceros} ceros`)