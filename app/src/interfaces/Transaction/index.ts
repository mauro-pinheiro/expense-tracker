import Category from "interfaces/Transaction/Category";
import Type from "interfaces/Transaction/Type";

interface Transaction{
    id: string | number,
    type: Type,
    category: Category
    amount: number,
    date: string
}

export default Transaction;