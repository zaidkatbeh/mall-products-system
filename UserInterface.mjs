import readline from "readline";

import { CategoryService } from "./CategoryService.mjs"
import { SubcategoryService } from "./SubcategoryService.mjs";
import { ProductService } from "./ProductService.mjs";
import { DiscountService } from "./DiscountService.mjs";

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
        this.printOptions("Manage Categories", "Manage Subcategories", "Manage Products", "Manage Discounts")
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
                    this.manageDiscounts();
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
                    this.getallSubcategories();
                    break;
                case "2":
                    this.searchForSubcategory();
                    break;
                case "3":
                    this.addSubcategory();
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
                    this.manageSubcategories();
            }
        })
    }

    manageProducts() {
        console.clear();
        console.log("-".repeat(60));
        console.log("MPMS--->manage products");
        console.log("-".repeat(60));
        this.printOptions(" get all", "search by", "add new", "go back");
        this.readl.question("enter the number of the procces you want to do? ", (answer) => {
            switch (answer) {
                case "1":
                    this.getallProducts();
                    break;
                case "2":
                    this.searchForProduct();
                    break;
                case "3":
                    this.addProduct();
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
                    this.manageProducts();
            }
        })
    }

    manageDiscounts() {
        console.clear();
        console.log("-".repeat(60));
        console.log("MPMS--->manage discounts");
        console.log("-".repeat(60));
        this.printOptions(" get all", "search by", "add new", "go back");
        this.readl.question("enter the number of the procces you want to do? ", (answer) => {
            switch (answer) {
                case "1":
                    this.getallDiscounts();
                    break;
                case "2":
                    this.searchForDiscounts();
                    break;
                case "3":
                    this.addDiscount();
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
                    this.manageDiscounts();
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
        this.readl.question("to see any category info or modify it  enter its id ,to go back enter <back> : ", answer => {
            if (answer == "back") {
                this.manageCategories();
            } else {
                let categoryIndex = -1;
                categories.map((category, currentIndex) => {
                    if (category.id == answer) {
                        categoryIndex = currentIndex;
                        return;
                    }
                });
                if (categoryIndex == -1) {
                    console.log("category not found");
                    setTimeout(() => {
                        this.getAllCategories();
                    }, 1000)
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
                let subcategories = searchResult.category.subcategories()

                console.log("Category id : " + searchResult.category.id);
                console.log("Category name : " + searchResult.category.name);
                console.log("*".repeat(20));
                console.log("subcategories");
                console.log();
                if (subcategories.length == 0) {
                    console.log("there is no subcategories to this category");
                } else {
                    subcategories.forEach(subcategory => {
                        console.log(`subcategory id :  ${subcategory.id}`);
                        console.log(`subcategory name :  ${subcategory.name}`);
                    });
                }
                
            }
            console.log("-".repeat(30));
            this.readl.question("to go back enter anything : ", (answer) => {
                this.manageCategories();
            });

        })
    }
    modifyCategory(categoryIndex) {
        console.clear();
        console.log("-".repeat(60));
        console.log("MPMS--->manage categories--->get all-->modify category");
        console.log("-".repeat(60));
        let category = CategoryService.categories[categoryIndex];
        console.log(`category name : ${category.name}`);
        this.readl.question("if you want to edit enter 1 , if you want to delete enter 2 : ", modifyType => {
            if (modifyType == 1) {
                this.readl.question("enter the new name : ", answer => {
                    if (typeof answer === "string" && answer != "") {
                        let result = CategoryService.edit(category.id, answer);
                        console.log(result == -1 ? "edit failed" : "edit successeded");
                        setTimeout(() => {
                            this.getAllCategories();
                        }, 1000)
                    } else {
                        console.log("please enter a valid name");
                        setTimeout(() => {
                            this.modifyCategory(categoryIndex);
                        }, 1000)
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
                }, 1000);
            }
        });
    }

    addSubcategory() {
        console.clear();
        console.log("-".repeat(60));
        console.log("MPMS--->manage subcategories--->add new");
        console.log("-".repeat(60));
        this.readl.question("enter the category id : ", categoryID => {
            this.readl.question("enter the subcategory name : ", subcategoryName => {
                console.log(SubcategoryService.add(categoryID, subcategoryName) == -1 ? "adding a subcategory failed" : "subcategory has been added");
                setTimeout(() => {
                    this.manageSubcategories();
                }, 1000)
            });
        });
    }

    getallSubcategories() {
        console.clear();
        console.log("-".repeat(60));
        console.log("MPMS--->manage subcategories--->get all");
        console.log("-".repeat(60));
        let subcategories = SubcategoryService.getAll();
        if (subcategories[0] == null) {
            console.log("there is no subcategories, add some");
        }
        else {
            console.log("id" + (" ".repeat(5)) + "categoryID" + (" ".repeat(5)) + "name");
            console.log("-".repeat(26));
            subcategories.forEach(subcategory => {
                let space = 22 - ("" + subcategory.id).length;
                console.log(`${subcategory.id}${" ".repeat(space / 2)}${subcategory.categoryID}${" ".repeat(space / 2)}${subcategory.name}`);
            });
        }
        console.log("-".repeat(30));
        this.readl.question("to see any subcategory info or modify it  enter its id ,to go back enter <back> : ", answer => {
            if (answer == "back") {
                this.manageSubcategories();
            } else {
                let subcategoryIndex = -1;
                subcategories.map((subcategory, currentIndex) => {
                    if (subcategory.id == answer) {
                        subcategoryIndex = currentIndex;
                        return;
                    }
                });
                if (subcategoryIndex == -1) {
                    console.log("subcategory not found");
                    setTimeout(() => {
                        this.getAllCategories();
                    }, 1000)
                } else {
                    this.modifySubcategory(subcategoryIndex);
                }
            }
        });
    }

    searchForSubcategory() {
        console.clear();
        console.log("-".repeat(60));
        console.log("MPMS--->manage subcategories--->search");
        console.log("-".repeat(60));
        this.readl.question("enter the name or the id for the subcategory you want to search for : ", (answer) => {
            let searchResult = SubcategoryService.searchBy("name", answer);
            if (searchResult == -1) {
                searchResult = SubcategoryService.searchBy("id", answer);
            }
            if (searchResult == -1) {
                console.log("no results");
            } else {
                let products = searchResult.subcategory.products();
                console.log("Subcategory id : " + searchResult.subcategory.id);
                console.log("Subcategory name : " + searchResult.subcategory.name);
                console.log("products");
                console.log();
                if (products.length == 0) {
                    console.log("there is no products to this subcategory");
                } else {
                    products.forEach(product => {
                        console.log(`product id :  ${product.id}`);
                        console.log(`product name :  ${product.name}`);
                    });
                }
            }
            console.log("-".repeat(30));
            this.readl.question("to go back enter anything : ", (answer) => {
                this.manageSubcategories();
            });

        })
    }

    modifySubcategory(subcategoryIndex) {
        console.clear();
        console.log("-".repeat(60));
        console.log("MPMS--->manage subcategories--->get all-->modify subcategory");
        console.log("-".repeat(60));
        let subcategory = SubcategoryService.subcategories[subcategoryIndex];
        console.log(`category name : ${subcategory.name}`);
        this.readl.question("if you want to edit enter 1 , if you want to delete enter 2 : ", modifyType => {
            if (modifyType == 1) {
                this.readl.question("enter the new name : ", answer => {
                    if (typeof answer === "string" && answer != "") {
                        let result = SubcategoryService.edit(subcategory.id, answer);
                        console.log(result == -1 ? "edit failed" : "edit successeded");
                        setTimeout(() => {
                            this.getallSubcategories();
                        }, 1000)
                    } else {
                        console.log("please enter a valid name");
                        setTimeout(() => {
                            this.modifyCategory(subcategoryIndex);
                        }, 1000)
                    }
                });
            } else if (modifyType == 2) {
                let result = SubcategoryService.delete(subcategory.id);
                if (result == -1) {
                    console.log("delete failed");
                } else {
                    console.log("delete successeded");
                }
                setTimeout(() => {
                    this.manageSubcategories();
                }, 1000);
            }
        });
    }

    addProduct() {
        console.clear();
        console.log("-".repeat(60));
        console.log("MPMS--->manage products--->add new");
        console.log("-".repeat(60));
        this.readl.question("enter the subcategory id : ", subcategoryID => {
            this.readl.question("enter the product name : ", productName => {
                this.readl.question("enter the producer name : ", producer => {
                    this.readl.question("enter the stock: ", stock => {
                        this.readl.question("enter the buying price : ", buyingPrice => {
                            this.readl.question("enter the sellinhg price : ", sellingPrice => {
                                console.log(ProductService.add(subcategoryID, productName, producer, stock,buyingPrice,sellingPrice) == -1 ? "adding a product failed" : "product has been added");
                                setTimeout(() => {
                                    this.manageProducts();
                                }, 1000);
                            })
                        })
                    })

                })
            });
        });
    }

    getallProducts() {
        console.clear();
        console.log("-".repeat(60));
        console.log("MPMS--->manage products--->get all");
        console.log("-".repeat(60));
        let products = ProductService.getAll();
        if (products[0] == null) {
            console.log("there is no products, add some");
        }
        else {
            console.log("id" + (" ".repeat(5)) + "subcategoryID" + (" ".repeat(5)) + "name"+ (" ".repeat(5)) + "producer"+ (" ".repeat(5)) + "stock"+ (" ".repeat(5)) + "buying price"+ (" ".repeat(5)) + "selling price");
            console.log("-".repeat(96));
            products.forEach(product => {
                console.log(`${product.id}${" ".repeat(10)}${product.subcategoryID} ${" ".repeat(10)} ${product.name}${" ".repeat(8)}${product.producer}${" ".repeat(8)}${product.stock}${" ".repeat(15)}${product.buyingPrice}${" ".repeat(15)}${product.sellingPrice}`);
            });
        }
        console.log("-".repeat(96));
        this.readl.question("to see any product info or modify it  enter its id ,to go back enter <back> : ", answer => {
            if (answer == "back") {
                this.manageProducts();
            } else {
                let productIndex = -1;
                products.map((product, currentIndex) => {
                    if (product.id == answer) {
                        productIndex = currentIndex;
                        return;
                    }
                });
                if (productIndex == -1) {
                    console.log("product not found");
                    setTimeout(() => {
                        this.getallProducts();
                    }, 1000)
                } else {
                    this.modifyProduct(productIndex);
                }
            }
        });
    }

    searchForProduct() {
        console.clear();
        console.log("-".repeat(60));
        console.log("MPMS--->manage products--->search");
        console.log("-".repeat(60));
        this.readl.question("enter the name, producer, subcategory id or the id  info for the product you want to search for : ", (answer) => {
            let searchResult = ProductService.searchBy("name", answer);
            if (searchResult == -1) {
                searchResult = ProductService.searchBy("id", answer);
            }
            if (searchResult == -1) {
                searchResult = ProductService.searchBy("producer", answer);
            }
            if (searchResult == -1) {
                searchResult = ProductService.searchBy("subcategoryID", answer);
            }
            if (searchResult == -1) {
                console.log("no results");
            } else {
                let discount = searchResult.product.discount()[0];
                console.log("Product id : " + searchResult.product.id);
                console.log("Product name : " + searchResult.product.name);
                console.log("Product subcategory id  : " + searchResult.product.subcategoryID);
                console.log("Product producer  : " + searchResult.product.producer);
                console.log("Product stock  : " + searchResult.product.stock);
                console.log("Product buying price : " + searchResult.product.buyingPrice);
                console.log("Product selling price : " + searchResult.product.sellingPrice);
                console.log("discounts");
                if (discount == undefined) {
                    console.log("there is no discount to this product");
                } else {
                        console.log(`discount id :  ${discount.id}`);
                        console.log(`product price :  ${discount.price}`);
                }
            }
            console.log("-".repeat(30));
            this.readl.question("to go back enter anything : ", (answer) => {
                this.manageProducts();
            });
        })
    }

    modifyProduct(productIndex) {
        console.clear();
        console.log("-".repeat(60));
        console.log("MPMS--->manage products--->get all-->modify product");
        console.log("-".repeat(60));
        let product = ProductService.products[productIndex];
        console.log("Product id : " + product.id);
        console.log("Product name : " + product.name);
        console.log("Product subcategory id  : " + product.subcategoryID);
        console.log("Product producer  : " + product.producer);
        console.log("Product stock  : " + product.stock);
        console.log("Product buying price : " + product.buyingPrice);
        console.log("Product selling price : " + product.sellingPrice);
        this.readl.question("if you want to edit enter 1 , if you want to delete enter 2 : ", modifyType => {
            if (modifyType == 1) {
                this.readl.question("enter the column name you want to edit  : ", columnName => {
                    this.readl.question("enter the value  you want to edit to: ", newValue => {
                        if (typeof columnName === "string" && columnName != "" && newValue != "") {
                            let result = ProductService.edit(product.id,columnName,newValue);
                            console.log(result == -1 ? "edit failed" : "edit successeded");
                            setTimeout(() => {
                                this.getallProducts();
                            }, 1000)
                        } else {
                            console.log("please enter a valid data");
                            setTimeout(() => {
                                this.modifyProduct(subcategoryIndex);
                            }, 1000)
                        }
                    })
                });
            } else if (modifyType == 2) {
                let result = ProductService.delete(product.id);
                if (result == -1) {
                    console.log("delete failed");
                } else {
                    console.log("delete successeded");
                }
                setTimeout(() => {
                    this.manageProducts();
                }, 1000);
            }
        });
    }

    addDiscount() {
        console.clear();
        console.log("-".repeat(60));
        console.log("MPMS--->manage discounts--->add new");
        console.log("-".repeat(60));
        this.readl.question("enter the product id : ", productID => {
            this.readl.question("enter the price : ", price => {
                this.readl.question("enter the end date : ", endingDate => {
                    console.log(DiscountService.add(productID, price, endingDate) == -1 ? "adding a discount failed" : "discount has been added");
                    setTimeout(() => {
                        this.manageDiscounts();
                    }, 1000);
                });
            });
        });
    }

    getallDiscounts() {
        console.clear();
        console.log("-".repeat(60));
        console.log("MPMS--->manage discounts--->get all");
        console.log("-".repeat(60));
        let discounts = DiscountService.getAll();
        if (discounts[0] == null) {
            console.log("there is no discounts, add some");
        }
        else {
            console.log("id" + (" ".repeat(5)) + "productID" + (" ".repeat(5)) + "price"+ (" ".repeat(5)) + "end date"+ (" ".repeat(5)));
            console.log("-".repeat(66));
            discounts.forEach(discount => {
                console.log(`${discount.id}${" ".repeat(10)}${discount.productID} ${" ".repeat(10)} ${discount.price}${" ".repeat(5)}${discount.endingDate}`);
            });
        }
        console.log("-".repeat(66));
        this.readl.question("to see any discount info or modify it  enter its id ,to go back enter <back> : ", answer => {
            if (answer == "back") {
                this.manageDiscounts();
            } else {
                let discountIndex = -1;
                discounts.map((discount, currentIndex) => {
                    if (discount.id == answer) {
                        discountIndex = currentIndex;
                        return;
                    }
                });
                if (discountIndex == -1) {
                    console.log("discount not found");
                    setTimeout(() => {
                        this.getallDiscounts();
                    }, 1000)
                } else {
                    this.modifyDiscount(discountIndex);
                }
            }
        });
    }
    
    searchForDiscounts() {
        console.clear();
        console.log("-".repeat(60));
        console.log("MPMS--->manage discounts--->search");
        console.log("-".repeat(60));
        this.readl.question("enter the id, product id ,price or ending date  for the discount you want to search for : ", (answer) => {
            let searchResult = DiscountService.searchBy("productID", answer);
            if (searchResult == -1) {
                searchResult = DiscountService.searchBy("id", answer);
            }
            if (searchResult == -1) {
                searchResult = DiscountService.searchBy("price", answer);
            }
            if (searchResult == -1) {
                searchResult = DiscountService.searchBy("endingDate", answer);
            }
            if (searchResult == -1) {
                console.log("no results");
            } else {
                console.log("discount id : " + searchResult.discount.id);
                console.log("discount product id  : " + searchResult.discount.productID);
                console.log("discount price : " + searchResult.discount.price);
                console.log("discount ending date price : " + searchResult.discount.endingDate);
            }
            console.log("-".repeat(30));
            this.readl.question("to go back enter anything : ", (answer) => {
                this.manageDiscounts();
            });
        })
    }

    modifyDiscount(discountIndex) {
        console.clear();
        console.log("-".repeat(60));
        console.log("MPMS--->manage discounts--->get all-->modify discount");
        console.log("-".repeat(60));
        let discount = DiscountService.discounts[discountIndex];
        console.log("discount id : " + discount.id);
        console.log("discount product id : " + discount.productID);
        console.log("discount price : " + discount.price);
        console.log("discount producer  : " + discount.producer);
        console.log("discount ending data  : " + discount.endingDate);
        this.readl.question("if you want to edit enter 1 , if you want to delete enter 2 : ", modifyType => {
            if (modifyType == 1) {
                this.readl.question("enter the column name you want to edit  : ", columnName => {
                    this.readl.question("enter the value  you want to edit to: ", newValue => {
                        if (typeof columnName === "string" && columnName != "" && newValue != "") {
                            let result = DiscountService.edit(discount.id,columnName,newValue);
                            console.log(result == -1 ? "edit failed" : "edit successeded");
                            setTimeout(() => {
                                this.getallDiscounts();
                            }, 1000)
                        } else {
                            console.log("please enter a valid data");
                            setTimeout(() => {
                                this.modifyDiscount(discountIndex);
                            }, 1000)
                        }
                    })
                });
            } else if (modifyType == 2) {
                let result = DiscountService.delete(discount.id);
                if (result == -1) {
                    console.log("delete failed");
                } else {
                    console.log("delete successeded");
                }
                setTimeout(() => {
                    this.manageDiscounts();
                }, 1000);
            }
        });
    }
}
let userInterface = new UserInterface();
userInterface.mainUI();