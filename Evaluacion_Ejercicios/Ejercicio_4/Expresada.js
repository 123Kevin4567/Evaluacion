
function LaMayor(...palabras) {
    if (palabras.length === 0) {
        return null; 
    }

    let mayor = palabras[0]; 
    for (let i = 1; i < palabras.length; i++) {
        if (palabras[i] > mayor) { 
            mayor = palabras[i]; 
        }
    }
    return mayor; 
}


function soloLetras(palabra) {
    const letraRegex = /^[a-zA-Z]+$/; 
    return letraRegex.test(palabra);
}


function cargarPalabras() {
    const n = parseInt(prompt("Escribe cuantas palabras vas a ingresar: "));
    let palabras = []; 
    let contador = 0; 

    while (contador < n) {
        let palabra = prompt("Escirbe una palabra(No se acepta otra cosa👀): "); 

   
        if (soloLetras(palabra)) {
            palabras.push(palabra); 
            contador++; 
        } else {
            alert("Lo siento pero solo se aceptan palabras");
        }
    }


    const palabraMayor = LaMayor(...palabras);
    console.log(`La palabra mas Mayor es: ${palabraMayor}`);
}

cargarPalabras();









