const ProductModel = require("../models/ProductsModel");

module.exports.getallProducts = async function (request, response) {
  try {
    const products = await ProductModel.getallProducts();
    response.json(products);
  } catch (err) {
    response.status(500).json({ error: 'Error reading products data' });
  }
};

module.exports.getProductByName = async function (request, response) {
  try {
    const name = request.params.name;
    const products = await ProductModel.getProductByName(name);

    if (products.length > 0) {
      response.json(products);
    } else {
      response.status(404).json({ message: 'No products found' });
    }
  } catch (err) {
    console.error(err); 
    response.status(500).json({ error: 'Error searching products' });
  }
};

module.exports.getProductById = async function (request, response) {
  try {
    const id = parseInt(request.params.id, 10);
    const product = await ProductModel.getProductById(id);

    if (product) {
      response.json(product);
    } else {
      response.status(404).json({ message: 'Product not found' });
    }
  } catch (err) {
    console.error(err);
    response.status(500).json({ error: 'Error fetching product' });
  }
};

