export class ProductService {
    static products = [];

    getAll() {
        return this.products;
    }

    static searchBy(column,input) {
        let result = -1;
         this.products.find((product,currentIndex) => {
            if (product[column] == input) {
                result = {"product":product,"index":currentIndex};
                return;
            }
        })
        return result;
    }

    static getLastID() {
        let maxID = 1;
        this.products.map((product) => {
            if (product.id > maxID) {
                maxID = product.id
            }
        });
        return maxID;

    }
}