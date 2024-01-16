//2do desafio entregable
//Manejo de archivos en JavaScript

/*
Consigna:

-Realizar una clase de nombre "ProductManager", el cual permitira trabajar con multiples productos. Este debe poder agregar, consultar, modificar y eliminar un producto y manejarlo en persistencia de archivos.
*/

//Llamamos a FileSystem para poder utilizar persistencia de archivos
const fs = require('fs')


class ProductManager {
    constructor() {
        this.products = []; //Inicializamos el array de productos vacio
        this.path = "products.json"; //Utilizaremos este archivo JSON para manejar los productos
    }

    //Agregamos un nuevo producto al carrito de productos (Se realizan diferentes validaciones y se escribe el archivo JSON).
    addProduct(product){
        this.getProducts();
        const { title, description, price, thumbnail, code, stock } = product;

        if(!product.title || !product.description || !product.price || !product.thumbnail || !product.code || !product.stock) {
            return console.log('Debe completar todos los campos ya que son obligatorios.');
        }

        if(this.products.some((p) => p.code === product.code)) {
            return console.log('El codigo ya existe, no debe crearse uno nuevo.')
        }

        const newProduct = {
            id: this.products.length + 1,
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        }

        this.products.push(newProduct);

        try {
            fs.writeFileSync(this.path, JSON.stringify(this.products))
            console.log("Los datos fueron escritos y guardados correctamente");

        } catch (error) {
            console.log("Error al escribir el archivo", error)
        }
    }

    //Leemos todos los productos que estan en el archivo
    getProducts() {
        try {
            const data = fs.readFileSync(this.path, "utf8")
    
            this.products = JSON.parse(data)
            console.log("Archivo leido");

        } catch (error) {
            console.error("Error al leer el archivo", error)
        }
        return this.products
    }

    //Buscamos productos a traves de su id, si no existen, devolvemos un console.log con "Not Found"
    getProductById(id) {
        this.getProducts()
        const productFind = this.products.find(product => product.id === id);

        if (productFind) {
            console.log(productFind);
        } else {
            console.log('Product not found');
        }
    }

    //Actualizamos el archivo con los productos (Validamos si el ID existe o no y luego volvemos a escribir el archivo actualizado)
    updateProduct(id, updateProduct) {
        this.getProducts();

        if(this.products.find((product) => product.id === id) === undefined) {
            console.error(`El id: ${id} no existe`);
            return
        }
        const index = this.products.findIndex((product) => product.id === id);
        this.products[index] = {id, ...updateProduct};

        try {
            fs.writeFileSync(this.path, JSON.stringify(this.products));
            console.log("Archivo de productos actualizado")
        } catch (error) {
            console.log("Error al actualizar el archivo de productos", error)
        }
    }

    //Eliminamos los productos del archivo en base a su ID (Volvemos a escribir el archivo con los nuevos productos)
    deleteProduct(id) {
        this.getProducts();

        if(this.products.find((product) => product.id === id) === undefined) {
            console.error(`El id: ${id} no existe`);
            return
        }

        const index = this.products.findIndex((product) => product.id === id);
        this.products.splice(index, 1);

        try {
            fs.writeFileSync(this.path, JSON.stringify(this.products));
            console.log("Producto eliminado exitosamente");

        } catch (error) {
            console.log("Error al eliminar el producto", error);
        }
    }

}


/*
Prueba de codigo:

const productManager = new ProductManager();

const product1 = {
    title: "Producto 1",
    description: "Este es el producto 1",
    price: 20,
    thumbnail: "imagenDelProducto",
    code: "abc123",
    stock: 2,
};

const product2 = {
    title: "Producto 2",
    description: "Este es el producto 2",
    price: 40,
    thumbnail: "imagenDelProducto2",
    code: "abcd1234",
    stock: 4,
};

productManager.addProduct(product1)
productManager.addProduct(product2)


let misProductos = productManager.getProducts();
console.log(misProductos);


const newProduct = {
    title: "Nuevo producto",
    description: "Nueva descripcion",
    price: 10,
    thumbnail: "imagenDelNuevoProducto",
    code: "abcde12345",
    stock: 6,
};

productManager.updateProduct(2, newProduct)

const product3 = {
    title: "Producto 3",
    description: "Este es el producto 3",
    price: 100,
    thumbnail: "imagenDelProducto3",
    code: "abcdef123456",
    stock: 5,
}

productManager.addProduct(product3)

misProductos = productManager.getProducts();


productManager.deleteProduct(2)
misProductos = productManager.getProducts();
console.log(misProductos);
*/