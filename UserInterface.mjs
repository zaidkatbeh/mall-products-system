import readline from "readline";
const readl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

class UserInterface {
    mainUI() {
        console.log("-".repeat(60));
        console.log("Welcome to mall products manegment system (MPMS)");
        console.log("-".repeat(60));
        console.log(`
1 - Manage Categories.
2 - Manage Subcategories.       
3 - Manage Products.
4 - Manage Offers.
5 - Close the App.        
        `);
        let userInput ;
        readl.question("enter the number of the procces you want to do? ",  (answer) => {
            switch(answer) {
                case "1" :
                    console.log("edit category");
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
}
let userInterface = new UserInterface();
userInterface.mainUI();