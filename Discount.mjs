export class Discount {
    id;
    productID;
    price
    startingData;
    endingData;

    constructor(id,productID,price,startingData,endingData) {
        this.productID = productID;
        this.price = price;
        this.startingData = startingData;
        this.endingData = endingData;
    }
}