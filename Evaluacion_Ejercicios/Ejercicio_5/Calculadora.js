

class Calculadora {
    suma(a, b) {
        let resultado = 0;
        try {
            this.validarNumeros(a, b);
            resultado = a + b;
            return resultado;
        } catch (error) {
            return error.message;
        }
    }

    resta(a, b) {
        let resultado = 0;
        try {
            this.validarNumeros(a, b);
            resultado = a - b;
            return resultado;
        } catch (error) {
            return error.message;
        }
    }

    multiplicacion(a, b) {
        let resultado = 0;
        try {
            this.validarNumeros(a, b);
            resultado = a * b;
            return resultado;
        } catch (error) {
            return error.message;
        }
    }

    division(a, b) {
        let resultado = 0;
        try {
            this.validarNumeros(a, b);
            if (b === 0) {
                throw new Error("Error: No es posible dividir por cero");
            }
            resultado = a / b;
            return resultado;
        } catch (error) {
            return error.message;
        }
    }

    validarNumeros(a, b) {
        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new Error("Error: Los valores deben ser números");
        }
        if (isNaN(a) || isNaN(b)) {
            throw new Error("Error: Los valores no pueden ser NaN");
        }
        if (!isFinite(a) || !isFinite(b)) {
            throw new Error("Error: Los valores deben ser finitos");
        }
    }
}





