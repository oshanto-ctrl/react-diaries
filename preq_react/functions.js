const products = [
  { id: 1, name: 'Laptop', category: 'Electronics', price: 1200, inStock: true },
  { id: 2, name: 'T-Shirt', category: 'Apparel', price: 25, inStock: true },
  { id: 3, name: 'Coffee Maker', category: 'Home Goods', price: 100, inStock: false },
  { id: 4, name: 'Book: React Guide', category: 'Books', price: 40, inStock: true },
  { id: 5, name: 'Mouse', category: 'Electronics', price: 75, inStock: true },
  { id: 6, name: 'Lamp', category: 'Electronics', price: 80, inStock: true},
];

console.log("____ .map() method usage example ____");
// Create an array of just products name
const productNames = products.map(product => product.name);
console.log("Products: ", productNames);

console.log("____ .filter() method usage ____");
// Let's get products that are in-stock
const inStockProducts = products.filter(product => product.inStock === true);
console.log("In-stock products: ", inStockProducts);
// Let's get only electronics items
const electronicItems = products.filter(product => product.category === "Electronics");
console.log("Electronics products: ", electronicItems);

console.log("____ .find() method usage ____");
// Let's find the product with id: 3
const homeGoods = products.find(product => product.id === 3);
console.log("3 rd item in list", homeGoods);
// Let's find a product that is not in the products.
const dummyGoods = products.find(product => product.id === 101); // Which doesn't exists
console.log("Item: ", dummyGoods);

console.log("Chaining Methods");
// Get names of all in-stock electronics
const inStockElectronicsNames = products.filter(product => product.category === "Electronics" &&
        product.inStock === true).map(product => product.name)

console.log("In Stock Electronics: ", inStockElectronicsNames);

// Get the names of all products that are in-stock & cost more than $50 
const result = products.filter(product => product.inStock && product.price > 50).map(product => product.name);
console.log("In stock & more than $50: ", result);

// Get the first product in the "Electronics" category return it's name only
const firstElectronicItem = products.find(product => product.category === "Electronics")
console.log("First Electronic product: ", firstElectronicItem.name);