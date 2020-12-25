import { Card, CardContent, CardHeader, Typography } from '@material-ui/core'
import React from 'react'
// import { Doughnut } from 'react-chartjs-2'
import Props from './Props';

import useStyles from './style';

const Details: React.FC<Props> = ({title}) => {
    const  classes = useStyles();

    return (
        <Card className={title === "income" ? classes.income : classes.expense}>
            <CardHeader title={title}/>
            <CardContent>
                <Typography variant="h5">$ 50</Typography>
                {/* <Doughnut data="Data"/> */}
            </CardContent>
        </Card>
    )
}

export default Details
