import { Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@material-ui/core';
import Category from 'interfaces/Transaction/Categoria';
import Type from 'interfaces/Transaction/Type';
import React, { useContext, useState } from 'react';
import moment from 'moment';
import { v4 as uuidV4 } from 'uuid';

import useStyles from './style'
import { ExpenseTrackerContext } from 'context';
import Transaction from 'interfaces/Transaction';

const initialState = {
    amount: 0,
    category: '',
    type: Type.Income,
    date: new Date()
}

const Form: React.FC = () => {
    const classes = useStyles();

    const { addTransaction } = useContext(ExpenseTrackerContext);

    const [formData, setFormData] = useState(initialState);

    const createTransaction = () => {
        const transaction = { id: uuidV4(), ...formData } as Transaction;
        if (addTransaction) {
            addTransaction(transaction)
        } else {
            console.log('not add');
        }

        setFormData(initialState);
    }

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography align="center" variant="subtitle2" gutterBottom>
                    ...
                </Typography>
            </Grid>
            <Grid item xs={6}>
                <FormControl fullWidth>
                    <InputLabel>Type</InputLabel>
                    <Select value={formData.type} onChange={(e: React.ChangeEvent<{ name?: string, value: unknown }>) => setFormData({ ...formData, type: (e.target.value as Type) })}>
                        <MenuItem value={Type.Income}>{Type.Income}</MenuItem>
                        <MenuItem value={Type.Expense}>{Type.Expense}</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <FormControl fullWidth>
                    <InputLabel>Cetegoria</InputLabel>
                    <Select value={formData.category} onChange={(e: React.ChangeEvent<{ name?: string, value: unknown }>) => setFormData({ ...formData, category: (e.target.value as Category) })}>
                        <MenuItem value={Category.Business}>{Category.Business}</MenuItem>
                        <MenuItem value={Category.Salary}>{Category.Salary}</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <FormControl fullWidth>
                    <TextField value={formData.amount} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, amount: +e.currentTarget.value })} type="number" label="Amount" fullWidth />
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <FormControl fullWidth>
                    <TextField value={moment(formData.date).utc().format('YYYY-MM-DD')} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, date: new Date(e.currentTarget.value) })} type="date" label="Date" fullWidth />
                </FormControl>
            </Grid>
            <Button className={classes.button} variant="outlined" color="primary" onClick={createTransaction} fullWidth>Create</Button>
        </Grid>
    )
}

export default Form
