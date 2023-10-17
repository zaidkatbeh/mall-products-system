import { Category } from "./Category.mjs";

export class CategoryService {
   static categories = [];
    // this function is already made from the last branch due to the need of it 
   static searchBy(column,input) {
        let result = -1;
         this.categories.find((category,currentIndex) => {
            if (category[column] == input) {
                result = {"category":category,"index":currentIndex};
                return;
            }
        })
        return result;
    }
    static getAll() {
        return this.categories;
    }
    static getLastID() {
        let maxID = 1;
        this.categories.map((category) => {
            if (category.id > maxID) {
                maxID = category.id
            }
        });
        return maxID;

    }
    static add(name) {
        if (typeof name != "string") {
            return -1;
        }
        if (this.searchBy("name",name) != -1) {
            console.log("there is already a category with this name");
            return -1;
        }
        return this.categories.push(new Category(this.getLastID() + 1, name));
    }
    static delete(id) {
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
    static edit(id,newName) {
        let CategoryIndex = this.searchBy("id",id);
        if(CategoryIndex == -1) {
            console.log("category not found");
            return -1;
        }
         this.categories[CategoryIndex.index].name = newName;
         return 1;
    }
    static getSubcategories(id) {
        if (typeof id != "number") {
            return -1;
        }
        let categoryIndex = -1;
        this.categories.map((category,currentIndex) => {
            if (category.id == id) {
                categoryIndex = currentIndex;
                return;
            }
        })
        console.log(categoryIndex);
        if(categoryIndex == -1) {
            console.log("category not found");
            return -1;
        }
        console.log(this.categories[categoryIndex]);
        return this.categories[categoryIndex].subcategories();
    }
}
