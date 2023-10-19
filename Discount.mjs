export class Discount {
    id;
    productID;
    price
    endingDate;

    constructor(id,productID,price,endingDate) {
        this.id = id;
        this.productID = productID;
        this.price = price;
        this.endingDate = endingDate;
    }
}