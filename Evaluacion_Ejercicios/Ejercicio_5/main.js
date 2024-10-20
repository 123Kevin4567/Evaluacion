import { Calculadora } from './Calculadora.js';

const calc = new Calculadora();

function realizarOperacion(operacion, num1, num2) {
    let resultado;
    switch (operacion) {
        case 1:
            resultado = calc.suma(num1, num2);
            console.log(`Suma`);
            break;
        case 2:
            resultado = calc.resta(num1, num2);
            console.log(`Resta`);
            break;
        case 3:
            resultado = calc.multiplicacion(num1, num2);
            console.log(`Multiplicasion`);
            break;
        case 4:
            resultado = calc.division(num1, num2);
            console.log(`Division`);
            break;
        default:
            resultado = "La operacion no es valida ";
    }
    return resultado;
}

function Alfincargas() {

    let operacion;
    
    do {
        operacion = parseInt(prompt("Escribe El numero de la operacion para continuar ( (1)Suma, (2) Resta, (3) Multiplicación, (4) División) "));
        if (isNaN(operacion) || ![1, 2, 3, 4].includes(operacion)) {
            alert("Lo sineto escribe uno de los 4 numeros de las operaciones");
        }
    } while (isNaN(operacion) || ![1, 2, 3, 4].includes(operacion)); 


    let num1 = solicitarNumero("Escribe el primer digito: ");
    let num2 = solicitarNumero("Escribe el segundo digito: ");

 
    const resultado = realizarOperacion(operacion, num1, num2);


    console.log(`Los numeros ingresados son: ${num1}, ${num2}`);
    console.log(`El resultado es : ${resultado}`);
}

function solicitarNumero(mensaje) {
    let numero;
    

    do {
        numero = parseFloat(prompt(mensaje));
        if (isNaN(numero)) {
            alert("No no no recuerda, debes ingresar un numero");
        }
    } while (isNaN(numero)); 
    
    return numero;
}


Alfincargas();



 