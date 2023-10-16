export class Category {
    id;
    name;
    constructor(id,name) {
        if(typeof name === "string") {
            this.id = id
            this.name = name
        }
    }
}
