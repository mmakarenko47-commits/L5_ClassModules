
export default class Product {
    constructor(name, price, inStock) {
        this._name = name;
        this._price = price;
        this._inStock = inStock;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        if (typeof value !== 'string' || value.trim() === '') {
            console.log('Название должно быть непустой строкой');
            return;
        }
        this._name = value;
    }

    get price() {
        return this._price;
    }

    set price(value) {
        if (typeof value !== 'number' || value < 0) {
            console.log('Цена должна быть неотрицательным числом');
            return;
        }
        this._price = value;
    }

    get inStock() {
        return this._inStock;
    }

    set inStock(value) {
        if (typeof value !== 'boolean') {
            console.log('inStock должно быть true или false');
            return;
        }
        this._inStock = value;
    }

    #applyDiscount() {
        this._price = this._price * 0.9;
    }

    discount() {
        this.#applyDiscount();
    }

    show() {
        if (this._deleted) {
            console.log('Экземпляр удалён');
            return;
        }
        console.log(`Продукт: ${this._name}, цена: ${this._price}, в наличии: ${this._inStock}`);
    }

    delete() {
        for (const key of Object.keys(this)) {
            delete this[key];
        }
        this._deleted = true;
    }

    copy() {
        return this;
    }

    static clone(product) {
        return new Product(product.name, product.price, product.inStock);
    }
}
