export class Discount {
    id;
    productID;
    price
    startingData;
    endingData;

    constructor(id,productID,price,endingData) {
        this.id = id;
        this.productID = productID;
        this.price = price;
        this.endingData = endingData;
    }
}