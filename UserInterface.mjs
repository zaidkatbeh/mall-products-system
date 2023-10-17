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
                    console.log("edit subcategory");
                    break;
                case "3" :
                    console.log("edit products");
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
}
let userInterface = new UserInterface();
userInterface.mainUI();