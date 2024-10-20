
module.exports = Calculadora;

const readline = require('readline');
const Calculadora = require('./Calculadora');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const calc = new Calculadora();

function mostrarMenu() {
    console.log('\n=== Calculadora ===');
    console.log('1. Suma');
    console.log('2. Resta');
    console.log('3. Multiplicación');
    console.log('4. División');
    console.log('5. Salir');
    console.log('================\n');
}

function pedirNumeros(operacion) {
    rl.question('Ingrese el primer número: ', (num1) => {
        rl.question('Ingrese el segundo número: ', (num2) => {
            let resultado;
            num1 = Number(num1);
            num2 = Number(num2);

            switch(operacion) {
                case '1':
                    resultado = calc.suma(num1, num2);
                    console.log(`Resultado: ${resultado}`);
                    break;
                case '2':
                    resultado = calc.resta(num1, num2);
                    console.log(`Resultado: ${resultado}`);
                    break;
                case '3':
                    resultado = calc.multiplicacion(num1, num2);
                    console.log(`Resultado: ${resultado}`);
                    break;
                case '4':
                    resultado = calc.division(num1, num2);
                    console.log(`Resultado: ${resultado}`);
                    break;
            }
            iniciarCalculadora();
        });
    });
}

function iniciarCalculadora() {
    mostrarMenu();
    rl.question('Seleccione una operación (1-5): ', (opcion) => {
        if (opcion === '5') {
            console.log('¡Gracias por usar la calculadora!');
            rl.close();
            return;
        }

        if (['1', '2', '3', '4'].includes(opcion)) {
            pedirNumeros(opcion);
        } else {
            console.log('Opción no válida. Por favor, seleccione una opción del 1 al 5.');
            iniciarCalculadora();
        }
    });
}

console.log('¡Bienvenido a la Calculadora!');
iniciarCalculadora();