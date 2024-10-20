// // En esta parte de aqui realizaremos todas los operaciones o requisitos que quermos a la hora de 
// compara la cantidad de didtos que se usaran para cada tipo de tarjetas//


export function america(numero) {  //En cada una de estas iniciaremos por exportar todas nuestras funciones  que usaremos en app
    let exp = /^3[4-7]\d{13}$/;  //En esta parte le estamos dando los requsitos a las tarjetas en este caso                               
    return exp.test(numero);
}

// Que el primer numero debe empezar por tres que seria el /^3 segidamente le indicaremos en tre corchetes que solo puede segurile numeros
// entre 4 y 7 osea que empieza o entre 34 o 37 asi con el resto de las funciones, despues con la declaracion
//  \d{} le inicaremos la cantidad de numeros que permitira en este caso es 13 y tambien suma el resto que serian el /^3 y el numero que 
//  se escoja entre parentesis sea 4 0 7 dando un total de 15 digitos permitidos

export function diners(numero) {
    let exp = /^3[6-8]\d{12}$/;
    return exp.test(numero);
}

export function discover(numero) {
    let exp = /^6011\d{12}$/;
    return exp.test(numero);
}

//La diferencia de este al resto es que va directamente y pide que si o si debe empezar desde 6011


export function mastercard(numero) {
    let exp = /^5[1-5]\d{14}$/;
    return exp.test(numero);
}

export function visa(numero) {
    let exp = /^4\d{12}(?:\d{3})?$/;
    return exp.test(numero);
}

//Esta funcion tiene detalles que ya sabemos como que ^ inicia la cadena seguido del numero que quiere que inicie
// \d{12} que debe tener solo 12 numeros la cadena, \d representa cualquier dígito del 0 al 9 
// el ? y el resto de las partes entre parentesis indica que esta es una parte opcional osea si no se toma el primero se pasara a este
// y por ultimo el signo de $ despues de todo esto indica el final de la cadena


// EN RESUMEN:Que debe empezar por el 4, que tienw 13 o 16 dígitos en total los cuales 12 son obligatorios y 3 son opcionales y
// que solo debe tener numeros






// function diners(numero) {
//     let exp = /^3(?:0[0-5]|[68]\d)\d{11}$/;
//     return exp.test(numero);
// }