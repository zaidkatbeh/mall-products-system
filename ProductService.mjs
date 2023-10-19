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

    // you cannot add 2 products with the same subcategory,name and producer
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
            if (product.name == name && product.subcategoryID == subcategoryID && product.producer == producer) {
                alreadyExist = true;
                return;
            }
        });
        if (alreadyExist == true) {
            console.log("there is already a product with the same subcategory id, name and producer");
            return -1;
        }
        this.products.push(new Product(this.getLastID() + 1, name, subcategoryID, producer, stock, byuingPrice, sellingPrice));
        return 1;
    }

    static delete(id) {
        if(typeof id != "number" || id < 1) {
            return -1;
        }
        let product = this.searchBy("id",id);
        if(product == -1) {
            console.log("product not found");
            return -1;
        }
        return (this.products.splice(product.index, 1)) ? 1 : -1;
    }
}