export class DiscountService {
    static discounts = [];

    static getAll() {
        return this.discounts;
    }
    
    static searchBy(column,input) {
        let result = -1;
         this.discounts.find((discount,currentIndex) => {
            if (discount[column] == input) {
                result = {"discount":discount,"index":currentIndex};
                return;
            }
        })
        return result;
    }

    static getLastID() {
        let maxID = 1;
        this.discounts.map((discount) => {
            if (discount.id > maxID) {
                maxID = discount.id
            }
        });
        return maxID;
    }
}