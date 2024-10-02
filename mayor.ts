const arreglo: number[] = [4, 7, 9, 3, 1, 45, 67, 23, 29, 78, 11, 16];
let numeroMasGrande: number | null = null;

function encontrarNumeroMasGrande(arreglo: number[]): void {
    if (arreglo.length > 0) {
        numeroMasGrande = arreglo[0];
        for (let i = 1; i < arreglo.length; i++) {
            if (arreglo[i] > numeroMasGrande) {
                numeroMasGrande = arreglo[i];
            }
        }
    }
}


function esParOImpar(numero: number): string {
    if (numero % 2 === 0) {
        return `El número ${numero} es par.`;
    } else {
        return `El número ${numero} es impar.`;
    }
}
encontrarNumeroMasGrande(arreglo);

console.log("El número más grande del arreglo es:", numeroMasGrande);
if (numeroMasGrande !== null) {
    const resultado = esParOImpar(numeroMasGrande);

    console.log(resultado);
}  