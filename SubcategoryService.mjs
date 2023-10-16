import { Subcategory } from "./Subcategory.mjs";

export class SubcategoryService {
    subcategories = [];
    getAll() {
        return this.subcategories;
    }
    getLastID() {
        let maxID = 1;
        this.subcategories.map((subcategory) => {
            if (subcategory.id > maxID) {
                maxID = subcategory.id
            }
        });
        return maxID;

    }
    searchBy(column, input) {
        let result = -1;
        this.subcategories.find((subcategory, currentIndex) => {
            if (subcategory[column] == input) {
                result = { "subcategory": subcategory, "index": currentIndex };
                return;
            }
        })
        return result;
    }
    add(categoryID, name) {
        if(typeof categoryID != "number" || typeof name != "string") {
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
    delete(id) {
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
    edit(id,newName) {
        if (typeof id != "number" || id < 1 || typeof newName != "string") {
            return -1;
        }
        let subcategory = this.searchBy("id",id);
        if(subcategory == -1) {
            console.log("subcateogry not found");
            return -1;
        }
        this.subcategories[subcategory.index].name = newName;
        return 1;
    }
}