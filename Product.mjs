export class Product {
    id;
    name;
    subcategoryID;
    producer;
    stock;
    byuingPrice;
    sellingPrice;

    constructor(id, name, subcategoryID, producer, stock, byuingPrice, sellingPrice) {
        this.id = id;
        this.name = name;
        this.subcategoryID = subcategoryID;
        this.producer = producer;
        this.stock = stock;
        this.byuingPrice = byuingPrice;
        this.sellingPrice = sellingPrice;
    }
}