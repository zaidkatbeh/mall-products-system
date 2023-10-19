export class ProductService {
    static products = [];

    getAll() {
        return this.products;
    }

    static searchBy(column,input) {
        let result = -1;
         this.pro4.find((product,currentIndex) => {
            if (product[column] == input) {
                result = {"product":product,"index":currentIndex};
                return;
            }
        })
        return result;
    }

}