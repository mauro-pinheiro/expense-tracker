import React, { useContext } from 'react'
import { Avatar, IconButton, List as MUIList, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText, Slide } from '@material-ui/core'

import useStyles from './style';
import Type from 'interfaces/Transaction/Type';
import { Delete, MoneyOff } from '@material-ui/icons';
import { ExpenseTrackerContext } from 'context';

const List: React.FC = () => {
    const classes = useStyles();

    const {state, deleteTransaction} = useContext(ExpenseTrackerContext);

    // console.log(state);

    return (
        <MUIList dense={false} className={classes.list}>
            {state?.transactions?.map((transaction) => (
                <Slide direction="down" in mountOnEnter unmountOnExit key={transaction.id}>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar className={transaction.type === Type.Income ? classes.avatarIncome : classes.avatarExpense}>
                                <MoneyOff />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={transaction.category.name} secondary={`$${transaction.amount} - $${transaction.date}`} />
                        <ListItemSecondaryAction>
                            <IconButton edge="end" aria-label="delete" onClick={() => deleteTransaction(transaction.id)}>
                                <Delete />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                </Slide>
            ))}
        </MUIList>
    )
}

export default List
