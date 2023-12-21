class Contador {
    constructor(responsable) {
        this.responsable = responsable,
        this.contador = 0
    }
    static contadorGlobal = 0;

    count() {
        this.contador++;
        Contador.contadorGlobal++;
    }

    getResponsable() {
        return this.responsable;
    }

    getCuentaIndividual() {
        return this.contador;
    }

    getCuentaGlobal() {
        return Contador.contadorGlobal;
    }
}


const contadorValentin = new Contador('Valentin');

contadorValentin.count();
console.log(Contador.contadorGlobal);
console.log(contadorValentin.getCuentaIndividual());
