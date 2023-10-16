import { Subcategory } from "./Subcategory.mjs";

export class SubcategoryService {
    subcategories = [];
    getAll() {
        return this.subcategories;
    }
    searchBy(column,input) {
        let result = -1;
         this.subcategories.find((subcategory,currentIndex) => {
            if (subcategory[column] == input) {
                result = {"subcategory":subcategory,"index":currentIndex};
                return;
            }
        })
        return result;
    }
}