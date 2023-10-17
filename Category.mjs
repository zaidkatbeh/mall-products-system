import { SubcategoryService } from "./SubcategoryService.mjs";

export class Category {
    id;
    name;
    constructor(id, name) {
        if (typeof name === "string") {
            this.id = id;
            this.name = name;
        }
    }
    subcategories() {
        console.log("get category subcategory called");
        let subcategoryService =  SubcategoryService;
        return subcategoryService.subcategories.filter((subcategory) => {
            console.log(`---->${subcategory.categoryID}<-----`);
            return subcategory.categoryID == this.id;
        });
    }
}
