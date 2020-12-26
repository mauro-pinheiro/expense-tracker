import { Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@material-ui/core';
import Category from 'interfaces/Transaction/Category';
import Type from 'interfaces/Transaction/Type';
import React, { useContext, useEffect, useState } from 'react';
import moment from 'moment';
import { v4 as uuidV4 } from 'uuid';

import useStyles from './style'
import { ExpenseTrackerContext } from 'context';
import Transaction from 'interfaces/Transaction';
import categories from 'constants/categories';
import { useSpeechContext } from '@speechly/react-client';
import Intent from 'constants/Speachly/Intent';
import EntityTypes from 'constants/Speachly/EntitiesType';
import CustumazedSnackbar from 'components/Snackbar';

const formatDate = (date: Date) => moment(date).format('YYYY-MM-DD');

const initialState = {
    amount: 0,
    category: '',
    type: Type.Income,
    date: formatDate(new Date()),
}

const Form: React.FC = () => {
    const classes = useStyles();
    const [formData, setFormData] = useState(initialState);
    const { addTransaction } = useContext(ExpenseTrackerContext);
    const { segment } = useSpeechContext();
    const [open, setOpen] = useState(false);


    const createTransaction = () => {
        if (Number.isNaN(formData.amount) || !formData.date.includes('-')) return;

        const transaction = { id: uuidV4(), ...formData, category: Category.getCategory(formData.category) } as Transaction;
        addTransaction(transaction)
        setOpen(true);
        setFormData(initialState);
    }

    useEffect(() => {
        if (segment) {
            if (segment.intent.intent === Intent.ADD_EXPENSE) {
                setFormData({ ...formData, type: Type.Expense })
            } else if (segment.intent.intent === Intent.ADD_INCOME) {
                setFormData({ ...formData, type: Type.Income })
            } else if (segment.isFinal && segment.intent.intent === Intent.CREATE_TRANSACTION) {
                return createTransaction();
            }
            else if (segment.isFinal && segment.intent.intent === Intent.CANCEL_TRANSACTION) {
                setFormData(initialState);
            }

            segment.entities.forEach(e => {
                const category = `${e.value.charAt(0)}${e.value.slice(1).toLocaleLowerCase()}`
                switch (e.type) {
                    case EntityTypes.AMOUNT:
                        setFormData({ ...formData, amount: +e.value })
                        break;
                    case EntityTypes.CATEGORY:
                        console.log(category);
                        if (categories.filter(c => c.type === Type.Income).map(c => c.name).includes(category)) {
                            setFormData({ ...formData, type: Type.Income, category })
                        } else if (categories.filter(c => c.type === Type.Expense).map(c => c.name).includes(category)) {
                            setFormData({ ...formData, type: Type.Expense, category })
                        }
                        break;
                    case EntityTypes.DATE:
                        // console.log(e.value)
                        setFormData({ ...formData, date: e.value })
                        break;
                    default:
                        break;
                }
            });
            if (segment.isFinal && formData.amount && formData.category && formData.date && formData.type) {
                createTransaction()
            }
        }
    }, [segment]);

    return (
        <Grid container spacing={2}>
            <CustumazedSnackbar open={open} setOpen= {setOpen}/>
            <Grid item xs={12}>
                <Typography align="center" variant="subtitle2" gutterBottom>
                    {segment && segment.words.map(w => w.value).join(" ")}
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
                    <Select value={formData.category} onChange={(e: React.ChangeEvent<{ name?: string, value: unknown }>) => setFormData({ ...formData, category: (e.target.value as string) })}>
                        {categories.filter((c) => c.type === formData.type).map((c) => <MenuItem key={c.name} value={c.name}>{c.name}</MenuItem>)}
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <FormControl fullWidth>
                    <TextField
                        value={formData.amount}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, amount: +e.currentTarget.value })}
                        onFocus={(e: React.FocusEvent<HTMLInputElement>) => e.target.select()}
                        type="number"
                        label="Amount" fullWidth />
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <FormControl fullWidth>
                    <TextField value={formData.date} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, date: e.currentTarget.value })} type="date" label="Date" fullWidth />
                </FormControl>
            </Grid>
            <Button className={classes.button} variant="contained" color="primary" onClick={createTransaction} fullWidth>Create</Button>
        </Grid>
    )
}

export default Form
