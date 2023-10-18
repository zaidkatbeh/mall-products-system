import readline from "readline";

import { CategoryService } from "./CategoryService.mjs"
import { SubcategoryService } from "./SubcategoryService.mjs";

class UserInterface {
    readl;
    constructor() {
        this.readl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });
    }
    mainUI() {
        console.clear();
        console.log("-".repeat(60));
        console.log("Welcome to mall products manegment system (MPMS)");
        console.log("-".repeat(60));
        this.printOptions("Manage Categories", "Manage Subcategories", "Manage Products", "Manage Offers")
        this.readl.question("enter the number of the procces you want to do? ", (answer) => {
            switch (answer) {
                case "1":
                    this.manageCategories();
                    break;
                case "2":
                    this.manageSubcategories();
                    break;
                case "3":
                    this.manageProducts();
                    break;
                case "4":
                    this.manageOffers();
                    break;
                case "5":
                    console.log("app is closed");
                    this.readl.close();
                    break;
                default:
                    console.log("please enter a valid number");
                    this.mainUI();
            }
        });
    }

    manageCategories() {
        console.clear();
        console.log("-".repeat(60));
        console.log("MPMS--->manage categories");
        console.log("-".repeat(60));
        this.printOptions("get all", "search by", "add new", "go back");
        this.readl.question("enter the number of the procces you want to do? ", (answer) => {
            switch (answer) {
                case "1":
                    this.getAllCategories();
                    break;
                case "2":
                    this.searchForCategory();
                    break;
                case "3":
                    this.addCategory();
                    break;
                case "4":
                    this.mainUI();
                    break;
                case "5":
                    console.log("app closed");
                    this.readl.close();
                    break;
                default:
                    console.log("please enter a valid number");
                    this.manageCategories();
            }
        })
    }

    manageSubcategories() {
        console.clear();
        console.log("-".repeat(60));
        console.log("MPMS--->manage subcategories");
        console.log("-".repeat(60));
        this.printOptions("get all", "search by", "add new", "go back");
        this.readl.question("enter the number of the procces you want to do? ", (answer) => {
            switch (answer) {
                case "1":
                    console.log("get all");
                    break;
                case "2":
                    console.log("search by");
                    break;
                case "3":
                    this.addSubcategory();
                    break;
                case "4":
                    console.log("edit");
                    break;
                case "5":
                    console.log("delete");
                    break;
                case "6":
                    this.mainUI();
                    break;
                case "7":
                    console.log("app closed");
                    this.readl.close();
                    break;
                default:
                    console.log("please enter a valid number");
                    this.manageCategories();
            }
        })
    }

    manageProducts() {
        console.clear();
        console.log("-".repeat(60));
        console.log("MPMS--->manage products");
        console.log("-".repeat(60));
        this.printOptions(" get all", "search by", "add new", "edit", "delete", "go back");
        this.readl.question("enter the number of the procces you want to do? ", (answer) => {
            switch (answer) {
                case "1":
                    console.log("get all");
                    break;
                case "2":
                    console.log("search by");
                    break;
                case "3":
                    console.log("add new ");
                    break;
                case "4":
                    console.log("edit");
                    break;
                case "5":
                    console.log("delete");
                    break;
                case "6":
                    this.mainUI();
                    break;
                case "7":
                    console.log("app closed");
                    this.readl.close();
                    break;
                default:
                    console.log("please enter a valid number");
                    this.manageCategories();
            }
        })
    }

    manageOffers() {
        console.clear();
        console.log("-".repeat(60));
        console.log("MPMS--->manage offers");
        console.log("-".repeat(60));
        this.printOptions(" get all", "search by", "add new", "edit", "delete", "go back");
        this.readl.question("enter the number of the procces you want to do? ", (answer) => {
            switch (answer) {
                case "1":
                    console.log("get all");
                    break;
                case "2":
                    console.log("search by");
                    break;
                case "3":
                    console.log("add new ");
                    break;
                case "4":
                    console.log("edit");
                    break;
                case "5":
                    console.log("delete");
                    break;
                case "6":
                    this.mainUI();
                    break;
                case "7":
                    console.log("app closed");
                    this.readl.close();
                    break;
                default:
                    console.log("please enter a valid number");
                    this.manageCategories();
            }
        })
    }

    printOptions(...options) {
        options.forEach((option, currentIndex) => {
            console.log(`${currentIndex + 1} - ${option}.`);
        });
        console.log(`${options.length + 1} - close the App`);
    }

    addCategory() {
        console.clear();
        console.log("-".repeat(60));
        console.log("MPMS--->manage categories--->add new");
        console.log("-".repeat(60));
        this.readl.question("enter the name of the category you want to add : ", (answer) => {
            let addingResult = CategoryService.add(answer);
            console.log(addingResult == -1 ? "adding failed" : "category has been added");
            setTimeout(() => {
                this.manageCategories();
            }, 1000)
        })
    }

    getAllCategories() {
        console.clear();
        console.log("-".repeat(60));
        console.log("MPMS--->manage categories--->get all");
        console.log("-".repeat(60));
        let categories = CategoryService.getAll();
        if (categories[0] == null) {
            console.log("there is no categories, add some");
        }
        else {
            console.log("id" + (" ".repeat(10)) + "name");
            console.log("-".repeat(16));
            categories.forEach(category => {
                let space = 12 - ("" + category.id).length;
                console.log(`${category.id}${" ".repeat(space)}${category.name}`);
            });
        }
        console.log("-".repeat(30));
        this.readl.question("to see any category info or modify it  enter its id ,to go back enter <back> : ",answer => {
            if(answer == "back") {
                this.manageCategories();
            } else {
                let categoryIndex = -1;
                categories.map((category,currentIndex) => {
                    if(category.id == answer) {
                        categoryIndex = currentIndex;
                        return;
                    }
                });
                if (categoryIndex == -1){
                    console.log("category not found");
                    setTimeout(() => {
                        this.getAllCategories();
                    },1000)
                } else {
                    this.modifyCategory(categoryIndex);
                }
            }
        });
    }
    searchForCategory() {
        console.clear();
        console.log("-".repeat(60));
        console.log("MPMS--->manage categories--->search");
        console.log("-".repeat(60));
        this.readl.question("enter the name or the id for the category you want to search for : ", (answer) => {
            let searchResult = CategoryService.searchBy("name", answer);
            if (searchResult == -1) {
                searchResult = CategoryService.searchBy("id", answer);
            }
            if (searchResult == -1) {
                console.log("no results");
            } else {
                console.log("Category id : " + searchResult.category.id);
                console.log("Category name : " + searchResult.category.name);
            }
        })
    }
    modifyCategory(categoryIndex) {
        console.clear();
        console.log("-".repeat(60));
        console.log("MPMS--->manage categories--->get all-->modify category");
        console.log("-".repeat(60));
        let category = CategoryService.categories[categoryIndex];
        console.log(`category name : ${category.name}`);
        this.readl.question("if you want to edit enter 1 , if you want to delete enter 2 : ",modifyType => {
            if (modifyType == 1) {
                this.readl.question("enter the new name : ",answer => {
                    if(typeof answer === "string" && answer != "") {
                        let result = CategoryService.edit(category.id, answer);
                        console.log(result == -1 ? "edit failed" : "edit successeded");
                        setTimeout(() => {
                            this.getAllCategories();
                        },1000)
                    } else {
                        console.log("please enter a valid name");
                        setTimeout(() => {
                            this.modifyCategory(categoryIndex);
                        },1000)
                    }
                });
            } else if (modifyType == 2) {
               let result = CategoryService.delete(category.id);
               if (result == -1) {
                console.log("delete failed");
               } else {
                console.log("delete successeded");
               }
               setTimeout(() => {
                this.manageCategories();
            },1000);
        }
        });
    }

    addSubcategory() {
        console.clear();
        console.log("-".repeat(60));
        console.log("MPMS--->manage subcategories--->add new");
        console.log("-".repeat(60));
        this.readl.question("enter the category id : ", categoryID => {
            this.readl.question("enter the subcategory name : ",subcategoryName => {
                console.log(SubcategoryService.add(categoryID,subcategoryName) == -1 ? "adding a subcategory failed" : "subcategory has been added");
                    setTimeout(() => {
                        this.manageSubcategories();
                    },1000)
            });
        });
    }
}
let userInterface = new UserInterface();
userInterface.mainUI();