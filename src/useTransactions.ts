import { ExpenseTrackerContext } from 'context';
import { useContext } from 'react';
import Type from 'interfaces/Transaction/Type';
import { useTheme } from '@material-ui/core';


const useTransactions = (type: Type) => {
    const { state } = useContext(ExpenseTrackerContext);
    const transactionOfType = state.transactions.filter((t) => t.type === type);
    const total = transactionOfType.map((f) => f.amount).reduce((acc, currVal) => acc += currVal, 0);
    const theme = useTheme();
    const sumOfTransactionsByCategory = transactionOfType.reduce((acc, currVal) => {
        const index = acc.findIndex(a => a.category === currVal.category.name);
        if(index < 0){ // nao encontrou
            acc.push({category: currVal.category.name, amount: currVal.amount, color: currVal.category.color});
        } else { //achou
            acc[index].amount += currVal.amount;
        }
        return acc;
    }, [] as {category: string, amount: number, color: string}[]);

    const chartData = {
        datasets: [{
            data: sumOfTransactionsByCategory.map(c => c.amount),
            backgroundColor: sumOfTransactionsByCategory.map(c => c.color)
        }],
        labels: sumOfTransactionsByCategory.map(c => c.category)
    }

    const chartOptions = {
        legend: {
            display: true,
            labels: {
                fontColor: theme.palette.text.secondary
            }
        }
    };

    return { total, chartData, chartOptions };
}

export default useTransactions;