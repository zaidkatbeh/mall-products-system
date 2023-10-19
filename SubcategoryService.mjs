import { CategoryService } from "./CategoryService.mjs";
import { Subcategory } from "./Subcategory.mjs";

export class SubcategoryService {
    static subcategories = [];
    static getAll() {
        return this.subcategories;
    }
    static getLastID() {
        let maxID = 1;
        this.subcategories.map((subcategory) => {
            if (subcategory.id > maxID) {
                maxID = subcategory.id
            }
        });
        return maxID;

    }
    static searchBy(column, input) {
        let result = -1;
        this.subcategories.find((subcategory, currentIndex) => {
            if (subcategory[column] == input) {
                result = { "subcategory": subcategory, "index": currentIndex };
                return;
            }
        })
        return result;
    }
    static add(categoryID, name) {
        if(typeof +categoryID != "number" || typeof name != "string") {
            return -1;
        }
        if (CategoryService.searchBy("id",categoryID) == -1) {
            console.log("there is no category with this id");
            return -1;
        }
        let alreadyExist = false;
        this.subcategories.map((subcategory) => {
            if (subcategory.name == name && subcategory.categoryID == categoryID) {
                alreadyExist = true;
                return;
            }
        });
        if (alreadyExist == true) {
            console.log("there is already a subcategory with the same category id and name");
            return -1;
        }
        this.subcategories.push(new Subcategory(this.getLastID() + 1, categoryID, name));
        return 1;
    }
    static delete(id) {
        if (typeof id != "number" || id < 1) {
            return -1;
        }
        let subcategory = this.searchBy("id", id);
        if(subcategory == -1) {
            console.log("subcategory not found");
            return -1;
        }
        this.subcategories.splice(subcategory.index, 1);
        return 1;
    }
    static edit(id,newName) {
        let subcategoryIndex = this.searchBy("id", id);
        if (subcategoryIndex == -1) {
            console.log("subcategory not found");
            return -1;
        }
        let isNameUsed = -1;
        this.subcategories.map((subcategory) => {
            if (subcategory.id != id && subcategory.name == newName) {
                isNameUsed = 1;
            }
        });
        if (isNameUsed == -1) {
            this.subcategories[subcategoryIndex.index].name = newName;
            return 1;
        } else {
            console.log("name already used");
            return -1;
        }
    }
}