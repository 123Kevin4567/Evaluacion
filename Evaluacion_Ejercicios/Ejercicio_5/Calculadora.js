export class Calculadora {
    suma(a, b) {
        if (!this.validarNumeros(a, b)) {
            return "Error: Debes ingresar valores numéricos válidos";
        }
        return a + b;
    }

    resta(a, b) {
        if (!this.validarNumeros(a, b)) {
            return "Error: Debes ingresar valores numéricos válidos";
        }
        return a - b;
    }

    multiplicacion(a, b) {
        if (!this.validarNumeros(a, b)) {
            return "Error: Debes ingresar valores numéricos válidos";
        }
        return a * b;
    }

    division(a, b) {
        if (!this.validarNumeros(a, b)) {
            return "Error: Debes ingresar valores numéricos válidos";
        }
        if (b === 0) {
            return "Error: No es posible dividir por cero";
        }
        return a / b;
    }

    validarNumeros(a, b) {
        return !isNaN(a) && !isNaN(b) && typeof a === 'number' && typeof b === 'number';
    }
}