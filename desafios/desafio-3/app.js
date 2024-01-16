//3er desafio entregable
//Servidores Web

const express = require("express");
const fs = require('fs');

const app = express();

app.get('/products', async(req, res) => {
    try {
        let products = await fs.promises.readFile('./products.json', 'utf-8');
        let productsParsed = JSON.parse(products);
        const limit = parseInt(req.query.limit);

        if(!isNaN(limit) && limit > 0) {
            let productsLimited = productsParsed.slice(0, limit);
            
            if (productsLimited.length > 0) {
                res.json(productsLimited);
            } else {
                res.json(productsParsed);
            }
        }
        
    } catch (error) {
        res.status(500).send(`Internal Server ${error}`);
    }
})

app.get('/products/:pid', async(req, res) => {
    try {
        let products = await fs.promises.readFile('./products.json', 'utf-8');
        let productsParsed = JSON.parse(products)
        const productById = req.params.pid;

        let product = productsParsed.find((user) => user.id === productById);

        if(!product) {
            return res.send({ error: "Producto no encontrado" });
        } else {
            res.send(product);
        }
        
    } catch(error) {
        res.status(500).send(`Internal Server ${error}`);
    }
})



app.listen(8080, () => console.log("Servidor con express online"));