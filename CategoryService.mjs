import { Category } from "./Category.mjs";

export class CategoryService {
    categories = [];
    // this function is already made from the last branch due to the need of it 
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
    getAll() {
        return this.categories;
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
        if (this.searchBy("name",name) != -1) {
            console.log("there is already a category with this name");
            return -1;
        }
        return this.categories.push(new Category(this.getLastID() + 1, name));
    }
    delete(id) {
        if(typeof id != "number" || id < 1) {
            return -1;
        }
        let category = this.searchBy("id",id);
        if(category == -1) {
            console.log("category not found");
            return -1;
        }
        return (this.categories.splice(category.index, 1)) ? 1 : -1
    }
    edit(id,newName) {
        let CategoryIndex = this.searchBy("id",id);
        if(CategoryIndex == -1) {
            console.log("category not found");
            return -1;
        }
        let isNameUsed = -1;
        this.categories.map((category) => {
            if(category.id != id && category.name == newName) {
                isNameUsed = 1;
            }
        });
        if(isNameUsed == -1) {
            this.categories[CategoryIndex.index].name = newName;
            return 1;
        } else {
            console.log("name already used");
            return -1;
        }
    }
}
