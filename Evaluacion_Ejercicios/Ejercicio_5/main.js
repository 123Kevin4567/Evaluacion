import { Calculadora } from './Calculadora.js';

const calc = new Calculadora();

function realizarOperacion(operacion, num1, num2) {
    let resultado;
    switch(operacion) {
        case 'suma':
            resultado = calc.suma(num1, num2);
            break;
        case 'resta':
            resultado = calc.resta(num1, num2);
            break;
        case 'multiplicacion':
            resultado = calc.multiplicacion(num1, num2);
            break;
        case 'division':
            resultado = calc.division(num1, num2);
            break;
        default:
            resultado = "Operación no válida";
    }
    return resultado;
}


console.log(realizarOperacion('suma', 5, 3));
console.log(realizarOperacion('division', 10, 2));