function escribirArchivo (texto, callback) {
    console.log(texto);

    setTimeout(() => {
        callback()
    }, 2000)
}

console.log('Inicio del programa')

escribirArchivo('Texto de escribir archivo', () => {
    console.log('Termine de escribir el archivo');
})

console.log('Fin del programa')