import React from "react";


const InfoCard = () => {
    const isIncome = Math.random() < 0.5;
    return (
        <div style={{ textAlign: 'center', padding: '0 10%' }}>
            Try saying: <br />
            Add {isIncome ? 'Income' : 'Expense'}
            for $100 in
            Category {isIncome ? 'Business' : 'House'}
            for Monday...
        </div>
    )
}

export default InfoCard
