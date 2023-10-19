import { ProductService } from "./ProductService.mjs";

export class Subcategory {
    id;
    categoryID;
    name;
    constructor(id,categoryID,name) {
        this.id = id;
        this.categoryID = categoryID;
        this.name = name;
    }
    products() {
        console.log("get category subcategory called");
        return ProductService.products.filter((product) => {
            return product.subcategoryID == this.id;
        });
    }
}