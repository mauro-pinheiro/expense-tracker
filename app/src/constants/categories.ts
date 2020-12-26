import Category from 'interfaces/Transaction/Category';
import Type from 'interfaces/Transaction/Type';

const incomeColors = ['#123123', '#154731', '#165f40', '#16784f', '#14915f', '#10ac6e', '#0bc77e', '#04e38d', '#00ff9d'];
const expenseColors = ['#b50d12', '#bf2f1f', '#c9452c', '#d3583a', '#dc6a48', '#e57c58', '#ee8d68', '#f79d79', '#ffae8a', '#cc474b', '#f55b5f'];

const categories = [
    { name: 'Business', type: Type.Income, color: incomeColors[0], amount: 0 },
    { name: 'Investments', type: Type.Income, color: incomeColors[1], amount: 0 },
    { name: 'Extra income', type: Type.Income, color: incomeColors[2], amount: 0 },
    { name: 'Deposits', type: Type.Income, color: incomeColors[3], amount: 0 },
    { name: 'Lottery', type: Type.Income, color: incomeColors[4], amount: 0 },
    { name: 'Gifts', type: Type.Income, color: incomeColors[5], amount: 0 },
    { name: 'Salary', type: Type.Income, color: incomeColors[6], amount: 0 },
    { name: 'Savings', type: Type.Income, color: incomeColors[7], amount: 0 },
    { name: 'Rental income', type: Type.Income, color: incomeColors[8], amount: 0 },
    { name: 'Bills', type: Type.Expense, color: expenseColors[0], amount: 0 },
    { name: 'Car', type: Type.Expense, color: expenseColors[1], amount: 0 },
    { name: 'Clothes', type: Type.Expense, color: expenseColors[2], amount: 0 },
    { name: 'Travel', type: Type.Expense, color: expenseColors[3], amount: 0 },
    { name: 'Food', type: Type.Expense, color: expenseColors[4], amount: 0 },
    { name: 'Shopping', type: Type.Expense, color: expenseColors[5], amount: 0 },
    { name: 'House', type: Type.Expense, color: expenseColors[6], amount: 0 },
    { name: 'Entertainment', type: Type.Expense, color: expenseColors[7], amount: 0 },
    { name: 'Phone', type: Type.Expense, color: expenseColors[8], amount: 0 },
    { name: 'Pets', type: Type.Expense, color: expenseColors[9], amount: 0 },
    { name: 'Other', type: Type.Expense, color: expenseColors[10], amount: 0 },
];

export const incomeCategories: Category[] = categories.filter(c => c.type === Type.Income);

export const expenseCategories: Category[] = categories.filter(c => c.type === Type.Expense);

export default categories;