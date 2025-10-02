const express = require("express");
const productsrouter = express.Router();
const productController = require('../Controller/ProductsController');


// get all products
productsrouter.route("/products")
.get(productController.getallProducts);

// GET product by name
productsrouter.route("/products/name/:name")
.get(productController.getProductByName);

// GET product by id
productsrouter.route("/products/id/:id")
.get(productController.getProductById);

module.exports = productsrouter;
