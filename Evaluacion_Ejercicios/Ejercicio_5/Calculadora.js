export class Calculadora {
    suma(a, b) {
        if (!this.Validandotela(a, b)) {
            return "Lo siento Bob debes ingresar numeros validos";
        }
        return a + b;
    }

    resta(a, b) {
        if (!this.Validandotela(a, b)) {
            return "Bob nada de numeros invalidos";
        }
        return a - b;
    }

    multiplicacion(a, b) {
        if (!this.Validandotela(a, b)) {
            return "Se que lo haces a proposito porfa solo numeros validos";
        }
        return a * b;
    }

    division(a, b) {
        if (!this.Validandotela(a, b)) {
            return "Numeros validos o cerrare el programa... Na";
        }
        if (b === 0) {
            return "No puedes dividir por cero explotara el PC ";
        }
        return a / b;
    }

    Validandotela(a, b) {
        return !isNaN(a) && !isNaN(b) && typeof a === 'number' && typeof b === 'number';
    }
}
