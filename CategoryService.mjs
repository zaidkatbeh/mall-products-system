import { Category } from "./Category.mjs";

export class CategoryService {
    categories = [];
    getAll() {
        return this.categories;
    }
    // this function is already made from the last branch due to the need of it 
    getByName(name) {
        return this.categories.find((category) => {
            if (category.name == name) {
                return category;
            }
        });
    }
    getLastID() {
        let maxID = 1;
        this.categories.map((category) => {
            if (category.id > maxID) {
                maxID = category.id
            }
        });
        return maxID;

    }
    add(name) {
        if (typeof name != "string") {
            return -1;
        }
        if (this.getByName(name)) {
            console.log("there is already a category with this name");
            return -1;
        }
        return this.categories.push(new Category(this.getLastID() + 1, name));
    }
}
