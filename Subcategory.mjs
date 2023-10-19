import { ProductService } from "./ProductService.mjs";

export class Subcategory {
    id;
    categoryID;
    name;
    constructor(id, categoryID, name) {
        this.id = id;
        this.categoryID = categoryID;
        this.name = name;
    }
    
    products() {
        return ProductService.products.filter((product) => {
            return product.subcategoryID == this.id;
        });
    }
}