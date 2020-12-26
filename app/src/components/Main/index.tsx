import { Card, CardContent, CardHeader, Divider, Grid, Typography } from '@material-ui/core'
import { ExpenseTrackerContext } from 'context';
import React, { useContext } from 'react'
import Form from './Form';
import List from './List';

import useStyles from './style'

const Main = () => {
    const classes = useStyles();
    const {balance} = useContext(ExpenseTrackerContext);

    return (
        <Card className={classes.root}>
            <CardHeader title="Expense Tracker" subheader="Powered by Speechly" />
            <CardContent>
                <Typography align="center" variant="h5" color={balance < 0 ? 'error' : 'textPrimary'}>Total Balance: {balance < 0 && "-"} $ {Math.abs(balance)}</Typography>
                <Typography variant="subtitle1" style={{ lineHeight: '1.5em', marginTop: '20px' }}>
                    {/* InfoCard */}
                    
                </Typography>
                <Divider className={classes.divider} />
                <Form />
            </CardContent>
            <Divider />
            <CardContent className={classes.cardContent}>
                <Grid container spacing={2}>
                    <Grid item xs={12} >
                        <List />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default Main
