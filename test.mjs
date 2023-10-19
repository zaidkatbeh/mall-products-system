import { CategoryService } from "./CategoryService.mjs";
import { DiscountService } from "./DiscountService.mjs";
import { ProductService } from "./ProductService.mjs";
import { SubcategoryService } from "./SubcategoryService.mjs";
const categoryService =   CategoryService;
categoryService.add("food");
// console.log("-----------------");
categoryService.add("juice");
// console.log("-----------------");
categoryService.add("name");

// console.log(categoryService.edit(3,"tes"));
// console.log("-----------------");
// console.log(categoryService.getAll());


const subcategoryService =  SubcategoryService;
// console.log(subcategoryService.getAll());
// // console.log(subcategoryService.searchBy("name","test"));
// console.log("-----------------");
subcategoryService.add(3,"test");
// // console.log(subcategoryService.getAll());
// console.log("-----------------");
subcategoryService.add(3,"test2");
// // console.log(subcategoryService.getAll());
// console.log("-----------------");
// // console.log(subcategoryService.delete(2));
// console.log("-----------------");
// // console.log(subcategoryService.getAll());
// console.log("-----------------");
// console.log(subcategoryService.edit(3,"newly edited ya baasha"));
// console.log("-----------------");
// console.log(subcategoryService.getAll());
// console.log("--------------------------");
// // console.log(categoryService.searchBy("id",3));
// console.log("category 3 subcategories");
// console.log("--------------------------");
// console.log(categoryService.getSubcategories(3));
subcategoryService.add(2, "food 2.0");
// console.log(subcategoryService.getAll());



// console.log(ProductService.getAll());
ProductService.add(2,"batata","mooza",5,10,15);
ProductService.add(2,"batata","mooza3",5,10,15);
// console.log(ProductService.searchBy("sellingPrice", "15"));
// console.log(ProductService.getAll());
// console.log(ProductService.delete(2));
ProductService.edit(2,"subcategoryID3","mooza3");
// console.log(ProductService.getAll());
// console.log(SubcategoryService.getProducts(2));


DiscountService.add(2,100,"15/07/2023");
DiscountService.add(3,100,"15/07/2023");
console.log(DiscountService.edit(2, "id", 1000));
console.log(DiscountService.edit(3, "endingDate", "10/08/2006"));
console.log(DiscountService.getAll());
// DiscountService.delete(3)
// console.log(DiscountService.getAll());
