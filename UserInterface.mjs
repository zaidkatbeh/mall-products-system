import readline from "readline";
const readl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

class UserInterface {
     mainUI() {
        console.clear();
        console.log("-".repeat(60));
        console.log("Welcome to mall products manegment system (MPMS)");
        console.log("-".repeat(60));
        this.printOptions("Manage Categories","Manage Subcategories","Manage Products","Manage Offers")
        readl.question("enter the number of the procces you want to do? ",  (answer) => {
            switch(answer) {
                case "1" :
                    this.manageCategories();
                    break;
                case "2" :
                    this.manageSubcategories();
                    break;
                case "3" :
                    this.manageProducts();
                    break;
                case "4" :
                    console.log("edit offers");
                    break;
                case "5" :
                    console.log("app is closed");
                    readl.close();
                    break;
                default :
                console.log("please enter a valid number");
                this.mainUI();
            }
        });
    }

    printOptions(...options) {
        options.forEach((option,currentIndex) => {
            console.log(`${currentIndex + 1} - ${option}.`);
        });
        console.log(`${options.length + 1} - close the App`);
    } 

    manageCategories() {
        console.clear();
        console.log("-".repeat(60));
        console.log("MPMS--->manage categories");
        console.log("-".repeat(60));
        this.printOptions(" get all","search by","add new","edit","delete","go back");
                readl.question("enter the number of the procces you want to do? ",  (answer) => {
                    switch(answer) {
                        case "1" :
                            console.log("get all");
                            break;
                        case "2" :
                            console.log("search by");
                            break;
                        case "3" :
                            console.log("add new ");
                            break;
                        case "4" :
                            console.log("edit");
                            break;
                        case "5" :
                            console.log("delete");
                            break;
                        case "6" :
                            this.mainUI();
                            break;
                        case "7" :
                            console.log("app closed");
                            readl.close();
                            break;
                        default :
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
        this.printOptions(" get all","search by","add new","edit","delete","go back");
                readl.question("enter the number of the procces you want to do? ",  (answer) => {
                    switch(answer) {
                        case "1" :
                            console.log("get all");
                            break;
                        case "2" :
                            console.log("search by");
                            break;
                        case "3" :
                            console.log("add new ");
                            break;
                        case "4" :
                            console.log("edit");
                            break;
                        case "5" :
                            console.log("delete");
                            break;
                        case "6" :
                            this.mainUI();
                            break;
                        case "7" :
                            console.log("app closed");
                            readl.close();
                            break;
                        default :
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
        this.printOptions(" get all","search by","add new","edit","delete","go back");
                readl.question("enter the number of the procces you want to do? ",  (answer) => {
                    switch(answer) {
                        case "1" :
                            console.log("get all");
                            break;
                        case "2" :
                            console.log("search by");
                            break;
                        case "3" :
                            console.log("add new ");
                            break;
                        case "4" :
                            console.log("edit");
                            break;
                        case "5" :
                            console.log("delete");
                            break;
                        case "6" :
                            this.mainUI();
                            break;
                        case "7" :
                            console.log("app closed");
                            readl.close();
                            break;
                        default :
                        console.log("please enter a valid number");
                        this.manageCategories();
                    }
            })
    }

}
let userInterface = new UserInterface();
userInterface.mainUI();