import { Subcategory } from "./Subcategory.mjs";

export class SubcategoryService {
    subcategories = [];
    getAll() {
        return this.subcategories;
    }
}