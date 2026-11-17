
import Product from './Product.js';

export default class FoodProduct extends Product {
    constructor(name, price, inStock, isPerishable) {
        super(name, price, inStock);
        this._isPerishable = isPerishable;
    }

    get isPerishable() {
        return this._isPerishable;
    }

    set isPerishable(value) {
        if (typeof value !== 'boolean') {
            console.log('isPerishable должно быть true или false');
            return;
        }
        this._isPerishable = value;
    }

    show() {
        if (this._deleted) {
            console.log('Экземпляр удалён');
            return;
        }
        console.log(`Продукт питания: ${this._name}, цена: ${this._price}, в наличии: ${this._inStock}, скоропортящийся: ${this._isPerishable}`);
    }

    delete() {
        super.delete();
    }

    copy() {
        return super.copy();
    }

    static clone(product) {
        return new FoodProduct(product.name, product.price, product.inStock, product.isPerishable);
    }
}
