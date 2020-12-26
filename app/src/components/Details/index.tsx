import { Card, CardContent, CardHeader, Typography } from '@material-ui/core'
import Type from 'interfaces/Transaction/Type';
import React from 'react'
import { Doughnut } from 'react-chartjs-2';
import useTransactions from 'useTransactions';
import Props from './Props';

import useStyles from './style';

const Details: React.FC<Props> = ({title}) => {
    const classes = useStyles();
    const {total, chartData, chartOptions} = useTransactions(title);

    return (
        <Card className={title === Type.Income ? classes.income : classes.expense}>
            <CardHeader title={title}/>
            <CardContent>
                <Typography variant="h5">$ {total}</Typography>
                <Doughnut data={ chartData } options={chartOptions}/>
            </CardContent>
        </Card>
    )
}

export default Details
