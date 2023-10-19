import { SubcategoryService } from "./SubcategoryService.mjs";
import { Product } from "./product.mjs";

export class ProductService {
    static products = [];

    static getAll() {
        return this.products;
    }

    static searchBy(column,input) {
        let result = -1;
         this.products.find((product,currentIndex) => {
            if (product[column] == input) {
                result = {"product":product,"index":currentIndex};
                return;
            }
        })
        return result;
    }

    static getLastID() {
        let maxID = 1;
        this.products.map((product) => {
            if (product.id > maxID) {
                maxID = product.id
            }
        });
        return maxID;
    }

    static add(subcategoryID, name, producer, stock, byuingPrice, sellingPrice) {
        if(typeof +subcategoryID != "number" || typeof name != "string") {
            return -1;
        }
        if (SubcategoryService.searchBy("id",subcategoryID) == -1) {
            console.log("there is no subcategory with this id");
            return -1;
        }
        let alreadyExist = false;
        this.products.map((product) => {
            if (product.name == name && product.categoryID == categoryID) {
                alreadyExist = true;
                return;
            }
        });
        if (alreadyExist == true) {
            console.log("there is already a product with the same subcategory id and name");
            return -1;
        }
        this.products.push(new Product(this.getLastID() + 1, name, subcategoryID, producer, stock, byuingPrice, sellingPrice));
        return 1;
    }
}