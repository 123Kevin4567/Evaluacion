
function PidiendoNumero() {
    let numeros = []; 
    let cantidad;
    
 
    do {
        cantidad = prompt("Cuantos numeros quiere poner?");
        

        if(cantidad === null) {
            alert("Saliendo dijo Edinson");
            return null;
        }
        
        cantidad = parseInt(cantidad);
        
        if(isNaN(cantidad) || cantidad <= 0) {
            alert("Lo siento solo positivos como el covid");
        }
    } while(isNaN(cantidad) || cantidad <= 0);


    for(let i = 0; i < cantidad; i++) {
        let num;
        let numeroValido = false;
        

        while(!numeroValido) {
            num = prompt("pon el numero " + (i+1) + " (O dale cancelar para salir)");
            

            if(num === null) {
                alert("Se cerro el programa");
                return null;
            }
            
            num = parseInt(num);
            
            if(isNaN(num)) {
                alert("Ese no es numero vuelve a intentar");
            } else {
                numeroValido = true;
                numeros.push(num);
            }
        }
    }
    return numeros;
}

function ordenamiento(...numeros) {
    let ordenados = numeros.sort(function(a, b) {
        return b - a;  
    });
    return ordenados;
}

function tablilla(numeros) {

    if(!numeros || numeros.length === 0) {
        console.log("No hay nada que mostrar como su amor");
        return;
    }

    console.log("-----------------");
    console.log("| Pos |  Numero |");
    console.log("-----------------");
    
    for(let i = 0; i < numeros.length; i++) {
  
        let numero = numeros[i];
        let espacio = numero.toString().length;
        let espacios = " ".repeat(6 - espacio);
        
        console.log("|  " + (i+1) + "  |" + espacios + numero + "    |");
    }
    
    console.log("-----------------");
}


let nums = PidiendoNumero();


if(nums && nums.length > 0) {
    let ordenados = ordenamiento(...nums);
    console.log("Los numeros ordenados serian asi:");
    tablilla(ordenados);
} else {
    console.log("Termino el porgrama bien, pero sin nada, que mal, pero al menos no fallo que bien,");
}