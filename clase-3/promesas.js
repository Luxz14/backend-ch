//Promesas
//Pendiente - Resuelto - Rechazado

const task = new Promise((resolve, reject) => {
    resolve(2);

    // reject('La promesa no ha sido resuelta');
})

task
    .then(resultadoResuelto => {
        return resultadoResuelto * 2;
    })
    .then(result => console.log(result))
    .catch(error => console.log(error))
    .finally(() => console.log('Esto se ejecutara de todos modos'))



const dividir = (num1, num2) => {
    return new Promise((res, rej) => {
        if(num2 === 0) {
            return rej('No se puede dividir por 0.')
        }
        res(num1 / num2);
    })
}

dividir(2, 3)
    .then(result => console.log(result))
    .catch(error => console.log(error))