const dividir = (num1, num2) => {
    return new Promise((res, rej) => {
        if(num2 === 0) {
            return rej('No se puede dividir por 0.')
        }
        res(num1 / num2);
    })
}

const operacion = async() => {
    try {
        const result = await dividr(10, 2);
        const result2 = result * 5
        console.log(result)
        console.log(result2)
    
    } catch (error) {
        console.log(error);
    }
}

operacion();