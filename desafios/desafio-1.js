//1er desafio entregable
//Clases con ECMAScript y ECMAScript avanzado

/*
Consigna:

-Realizar una clase ProductManager que gestione un conjunto de productos.
*/

class ProductManager {
    constructor() {
        this.products = []; //Inicializamos el array de productos vacio
    }

    //Agregamos un nuevo producto al carrito de productos (Se realizan diferentes validaciones).
    addProduct(product) {
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
    }

    //Obtenemos todos los productos agregados al array
    getProduct() {
        console.log(this.products); 
    }

    //Buscamos productos a traves de su id, si no existen, devolvemos un console.log con "Not Found"
    getProductById(id) {
        const productFind = this.products.find(product => product.id === id);

        if (productFind) {
            console.log(productFind);
        } else {
            console.log('Product not found');
        }
    }
}


/*
Prueba de codigo:

const productManager1 = new ProductManager();
productManager1.getProduct();

const product1 = {
    title: 'Remera azul',
    description: 'Una remera azul de talle M',
    price: 500,
    thumbnail: 'No se encuentra una imagen',
    code: 'vvsklh1413',
    stock: 10,
};

const product2 = {
    title: 'Remera roja',
    description: 'Una remera roja de talle S',
    price: 200,
    thumbnail: 'No se encuentra una imagen',
    code: 'abc123',
    stock: 8,
};

productManager1.addProduct(product1);
productManager1.getProduct()
productManager1.addProduct(product1);
productManager1.addProduct(product2);
productManager1.getProductById(4);
productManager1.getProductById(1);
productManager1.getProductById(2);
*/
