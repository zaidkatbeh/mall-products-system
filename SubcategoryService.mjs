import { Subcategory } from "./Subcategory.mjs";

export class SubcategoryService {
    subcategories = [];
    getAll() {
        return this.subcategories;
    }
    searchBy(column,input) {
        let result = -1;
         this.categories.find((category,currentIndex) => {
            if (category[column] == input) {
                result = {"category":category,"index":currentIndex};
                return;
            }
        })
        return result;
    }
}