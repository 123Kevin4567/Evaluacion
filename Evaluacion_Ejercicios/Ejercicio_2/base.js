

export function Menusito() { 

    let menu = "Meni mini calculadora:\n";
    menu += "1 Sumar numeros\n";
    menu += "2 Contar numeros primos\n";
    menu += "3 Contar numeros pares\n";
    menu += "4 Calcular el promedio de los numeros primos\n";
    menu += "5 Calcular el promedio de los numeros pares\n";
    menu += "6 Salir";
    
    return prompt(menu);
}

export function pedirNumeros() {

    let numeros = [];
    let cantNumeros= parseInt(prompt("Cuantos numeros quieres ingresar?"));

    for (let i = 0; i < cantNumeros; i++) {
        let numero = parseInt(prompt(`Ingrese el numero ${i + 1}:`));
        numeros.push(numero);
    }
    
    return numeros;
}

export function Resultado(message) {
    alert(message);
}