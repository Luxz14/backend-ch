//Clases => ES6 = Sugar Syntax

//Objetos Literales
const personaValentin = {
    nombre: 'Valentin',
    apellido: 'Lucero',
    email: 'Thisisanemail@gmail.com',
};

//Clases => Moldes
class Persona {
    saludar() {
        console.log('Hola, como estan?')
    }
}

//Instanciar
const persona = new Persona();
persona.saludar();

class Persona2 {
    constructor(nombre, apellido, email) {
        this.nombre = nombre,
        this.apellido = apellido,
        this.email = email
    }

    saludar() {
        return `Hola, como estas ${this.nombre}?`;
    }
}

const persona2 = new Persona2('Sara', 'Lucero', 'Thisisanemail2@gmail.com');
console.log(persona2.saludar());