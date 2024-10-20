class Calculadora {
    suma(a, b) {
        let resultado = 0;
        try {
            this.validarNumeros(a, b);
            resultado = a + b;
            return resultado;
        } catch 