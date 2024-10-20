//Como en el anterior aqui importaremos todos  las funciones que realizamos sobre el tamaño de cada tarjeta

import { america, diners,discover,mastercard, visa } from "./tarjetas.js";


console.log(america("341234567890123"));

console.log(diners("36123456789012"));

console.log(discover("6011345678901211"));

console.log(mastercard("5123456789012345"));

console.log(visa("4123456789012"));


//En este caso el vez de let use un log para agrupar tanto la ejecucion de las atrjetas como un ejemplo del tamaño de cada una segun corresponde


//Realizamos nuestro while que empezara como tru para que pueda proseguir

while (true) {

let numero = prompt(`Ingrese el numero de su tarjeta`)

//Esta funcion nos ayudara a identificar que tarjeta es la que corresponde segun los numeros que pusimos pasando de uno en un uno
// hasta encontarlo retornando el nombre de la tarjeta y en caso contrario saldra que no se encontro no es valida la tarjeta

function identificarTarjeta(numero) {
    if (america(numero)) return "american Express";
    if (diners(numero)) return "Diners club fortneti";
    if (discover(numero)) return "Discover";
    if (mastercard(numero)) return "Master card";
    if (visa(numero)) return "Visa";
    return "Tarjeta no encontrada o no valida";
}

    //Aqui estaran lo que se puede entener como los campos que que deben cumplir para que puedas proseguir




    try {
         //El primero y algo fundamental si no escribes ningun numero no proseguira el programa
        if (!numero) {
            throw new Error("Si quieres continuar ingresa los numeros si no el de atras se enoja");
        }

       
         // Esta línea elimina todos los espacios en blanco y guiones que esten en el campo
        numero = numero.replace(/[\s-]/g, '');

        
        
       
    //    Gracias a esta linea ayudara averificar verifica si la cadena contiene solo numeros y en caso contrario lanza el error "Solo puedes escribir numeros no letras"
        if (!/^\d+$/.test(numero)) {
            throw new Error("Solo puedes ecribir numeros no letras");
        }

        
    //Verifica si la longuitd de la cadena que escribiste empieza desde el mas bajon ose 13 y el limite que seria 16
    // en caso contraio sale el error "Longitud no válida (debe ser entre 13 y 16 dígitos)"


        if (numero.length > 16 || numero.length < 13) { //Osea si el numero de teclado es mayoy a 16 y menor que 13
            throw new Error("Longitud no válida (debe ser entre 13 y 16 dígitos)");
        }
        
    //Algo facil si los numeros son menos a cero osea negativos sal el error "No se permiten números negativos"
        if (parseInt(numero) < 0) {
            throw new Error("No se permiten números negativos");
        }

//Por ultimo bvolvemos a invocar el identificarTarjeta par que cuando se cumpla todos los requisitos salfo un mensaje
// de alerta con el texto `Su numero es valido - Tipo de tarjeta: seguido del tipo de tarjeta que se identific segun sus caracteres
        const tipoTarjeta = identificarTarjeta(numero);
        alert(`Su numero es valido - Tipo de tarjeta: ${tipoTarjeta}`);
        break;
        
    } catch (error) {
        alert(error.message);
    }
}