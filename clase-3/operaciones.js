const sumar = (numero1, numero2) => numero1 + numero2;
const restar = (numero1, numero2) => numero1 - numero2;
const multiplicar = (numero1, numero2) => numero1 * numero2;
const dividir = (numero1, numero2) => numero1 / numero2; //numero2 == 0 => error => infinite.

const realizarOperaciones = (numero1, numero2, callback) => {
    console.log('Vamos a realizar operaciones!');

    let result = callback(numero1, numero2);

    console.log(`El resultado de la operacion es: ${result}`);
}

realizarOperaciones(2, 5, sumar)
realizarOperaciones(2, 5, restar)
realizarOperaciones(2, 5, multiplicar)
realizarOperaciones(2, 5, dividir)
