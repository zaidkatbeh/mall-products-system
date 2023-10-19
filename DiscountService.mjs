import { Discount } from "./Discount.mjs";
import { ProductService } from "./ProductService.mjs";

export class DiscountService {
    static discounts = [];

    static getAll() {
        return this.discounts;
    }

    static searchBy(column, input) {
        let result = -1;
        this.discounts.find((discount, currentIndex) => {
            if (discount[column] == input) {
                result = { "discount": discount, "index": currentIndex };
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

    static add(productID, price, endData) {
        if (Number.isNaN(+productID) || Number.isNaN(+price) || !endData.match(/^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/)) {
            return -1;
        }

        if (ProductService.searchBy("id", productID) == -1) {
            console.log("there is no product with this id");
            return -1;
        }

        this.discounts.map((discount, currentIndex) => {
            if (discount.productID == productID) {
                this.discounts.splice(currentIndex, 1);
            }
        });
        this.discounts.push(new Discount(this.getLastID() + 1, productID, price, endData));
        return 1;
    }

    static delete(id) {
        if (typeof id != "number" || id < 1) {
            return -1;
        }
        let discount = this.searchBy("id", id);
        if (discount == -1) {
            console.log("discount not found");
            return -1;
        }
        this.discounts.splice(discount.index, 1);
        return 1;
    }

    static edit(id, column, newValue) {
        if (typeof id != "number" || id < 1 || (column != "price" && column != "endingData")|| (column == "price" && Number.isNaN(newValue) || (column == "endData" && !newValue.match(/^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/)))) {
            return -1;
        }
        let discountIndex = this.searchBy("id", id);
        if (discountIndex == -1) {
            console.log("discount not found");
            return -1;
        }

        this.discounts[discountIndex.index][column] = newValue;
        return 1;

        }
}