//Hands in Lab de clase 1
const mostrarLista = (elementosArray = []) => {
    if(elementosArray.length === 0) return 'Lista vacia';
    elementosArray.forEach(elemento => console.log(elemento))
    return elementosArray.length;
}

//pruebas

if(mostrarLista() === 'Lista vacia') {
    console.log('prueba uno pasada, cero elementos')
}

if(mostrarLista([1, 2, 3]) === 3) {
    console.log('prueba dos pasada, hay 3 elementos')
}