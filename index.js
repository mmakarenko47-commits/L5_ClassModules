import FoodProduct from './FoodProduct.js';

const products = [
    new FoodProduct('Молоко', 2.5, true, true),
    new FoodProduct('Макароны', 1.8, false, false)
];

products.forEach(product => product.show());