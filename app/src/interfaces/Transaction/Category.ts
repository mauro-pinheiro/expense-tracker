import categories from "constants/categories";
import Type from "./Type";

class Category{
    name!: string;
    color!: string;
    type!: Type;
    amount: number = 0;

    static getCategory(name: string): Category {
        const value = categories.find( (c) => c.name === name );
        if(value){
            return value;
        } else {
            throw new TypeError("Categoria não encontrada!");
        }
    }
}

export default Category;