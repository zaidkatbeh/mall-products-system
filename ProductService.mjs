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
        if(Number.isNaN(+subcategoryID) || typeof name != "string" || typeof producer != "string" || Number.isNaN(+stock) || Number.isNaN(+byuingPrice) || Number.isNaN(+sellingPrice)) {
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

    
    static edit(id, column, newValue) {
        if (typeof id != "number" || id < 1 || ((column == "stock" || column == "buyingPrice" || column == "sellingPrice") && Number.isNaN(+newValue)) || column == "id" || column == "subcategoryID" || (column != "name" && column != "producer" && column != "stock " && column != "buyingPrice" && column != "sellingPrice" )) {
            return -1;
        }
        let productIndex = this.searchBy("id",id).index;
        if (productIndex == -1) {
            console.log("product not found");
            return -1;
        }
        // a variable to check if there is already a product with the same name, subcategory id and producer
        let doesCopyExists = -1;
        console.log(`product index is ${productIndex}`);
        if (column == "name") {
            this.products.map((product) => {
                if(product.id != id && product.name == newValue && product.producer == this.products[productIndex].producer && product.subcategoryID == this.products[productIndex].subcategoryID) {
                    doesCopyExists = 1;
                }
            });
        } else if(column == "producer") {
            this.products.map((product) => {
                if(product.id != id && product.name == this.products[productIndex].name && product.producer == newValue && this.products[productIndex].subcategoryID == product.subcategoryID) {
                    doesCopyExists = 1;
                }
            });
        }
        if (doesCopyExists == -1) {
            this.products[productIndex][column] = newValue;
            return 1;
        } else {
            console.log("2 products cannot have the same name, producer and subcategory id");
            return -1;
        }
    }
}