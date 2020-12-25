import Category from "interfaces/Transaction/Categoria";
import Type from "interfaces/Transaction/Type";

interface Transaction{
    id: string | number,
    type: Type,
    category: Category
    amount: number,
    date: Date
}

export default Transaction;