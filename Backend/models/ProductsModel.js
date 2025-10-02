const fs = require("fs").promises;
const path = require("path");
const dataPath = path.join(__dirname, '../Data/products.json');

// get all Products
async function getallProducts() {
  const data = await fs.readFile(dataPath, 'utf-8');
  const parsed = JSON.parse(data);
  return parsed.products; 
}

// find product(s) by name
async function getProductByName(name) {
  const products = await getallProducts(); 
  const searchTerm = name.toLowerCase();

  return products.filter(p =>
    p.title.toLowerCase().includes(searchTerm) 
  );
}

// get product(s) by id for product details
async function getProductById(id) {
  const products = await getallProducts();
  return products.find(p => p.id === id);
}

module.exports = {
  getallProducts,
  getProductByName,
  getProductById
};

