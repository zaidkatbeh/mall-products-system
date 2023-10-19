import { SubcategoryService } from "./SubcategoryService.mjs";

export class Category {
    id;
    name;
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    
    subcategories() {
        let subcategoryService = SubcategoryService;
        return subcategoryService.subcategories.filter((subcategory) => {
            return subcategory.categoryID == this.id;
        });
    }
}
