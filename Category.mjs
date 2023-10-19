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
        let subcategoryService =  SubcategoryService;
        return subcategoryService.subcategories.filter((subcategory) => {            return subcategory.categoryID == this.id;
        });
    }
}
