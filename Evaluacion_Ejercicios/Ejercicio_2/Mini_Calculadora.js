
import {    
    sumaNumeros, contarPrimos, contarPares, promedioPrimos, promedioPares 
} from './opreciones.js';

import {   
    Menusito, pedirNumeros, Resultado 
} from './base.js';

function Begin() {   
    let numeros = pedirNumeros();
    let continuar = true;

    while (continuar) {
        let opcion = Menusito();

        switch(opcion) {

            case '1':
                Resultado("La suma de los numeros es: " + sumaNumeros(numeros));
                break;


            case '2':
                Resultado("La cantidad de numeros primos es: " + contarPrimos(numeros));
                break;


            case '3':
            Resultado("La cantidad de numeross pares es: " + contarPares(numeros));
                break;


            case '4':
                let promedioPrimosResultado = promedioPrimos(numeros);
                if (promedioPrimosResultado === 0) {
                    Resultado("No hay ningun numero primo");
                } else {
                    Resultado("el promedio de los numeros primos es: " + promedioPrimosResultado);
                }
                break;


            case '5':
                let promedioParesResultado = promedioPares(numeros);
                if (promedioParesResultado === 0) {
                    Resultado("No hay ningun numero par");
                } else {
                    Resultado("El promedio de los numeros pares es: " + promedioParesResultado);
                }
                break;


            case '6':
                Resultado("Thankyu por usar nuestra calculadora china");
                continuar = false;
                break;

            default:
                Resultado("Opcion no valida intanta volver a probar");
        }
    }
}


Begin();