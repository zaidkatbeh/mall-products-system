import { DiscountService } from "./DiscountService.mjs";

export class Product {
    id;
    name;
    subcategoryID;
    producer;
    stock;
    buyingPrice;
    sellingPrice;

    constructor(id, name, subcategoryID, producer, stock, buyingPrice, sellingPrice) {
        this.id = id;
        this.name = name;
        this.subcategoryID = subcategoryID;
        this.producer = producer;
        this.stock = stock;
        this.buyingPrice = buyingPrice;
        this.sellingPrice = sellingPrice;
    }
    
    discount() {
        return DiscountService.discounts.filter((discount) => {
                    return discount.productID == this.id;
        });
    }
}