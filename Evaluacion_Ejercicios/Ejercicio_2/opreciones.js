 

export function esPrimo(num) {

    if (num < 2) return false;

    for (let i = 2; i < num; i++) {
        if (num % i === 0)     
    return false;

    }
    return true;
}

export function esPar(numeros) {
    return numeros % 2 === 0;
}

export function sumaNumeros(numeros) {
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i];
    }
    return suma;
}

export function contarPrimos(numeros) {

    let contador = 0;

    for (let i = 0; i < numeros.length; i++) {
        if (esPrimo(numeros[i])) {
            contador++;
        }
    }

    return contador;
}

export function contarPares(numeros) {

    let contador = 0;

    for (let i = 0; i < numeros.length; i++) {
        if (esPar(numeros[i])) {
            contador++;
        }
    }

    return contador;
}

export function promedioPrimos(numeros) {

    let suma = 0;
    let cantidad = 0;
    
    for (let i = 0; i < numeros.length; i++) {

        if (esPrimo(numeros[i])) {

            suma += numeros[i];
            cantidad++;
        }
    }
    
    return cantidad > 0 ? suma / cantidad : 0;
}


export function promedioPares(numeros) {

    let suma = 0;
    let cantidad = 0;
    
    for (let i = 0; i < numeros.length; i++) {
        if (esPar(numeros[i])) {
            suma += numeros[i];
            cantidad++;
        }
    }
    
    return cantidad > 0 ? suma / cantidad : 0;
}