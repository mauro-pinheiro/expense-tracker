
import { Snackbar, SnackbarCloseReason } from '@material-ui/core';
import React from 'react';
import MuiAlert from '@material-ui/lab/Alert'
import useStyles from './style'

interface Props {
    open: boolean;
    setOpen: (open: boolean) => void
}

const CustumazedSnackbar: React.FC<Props> = ({ open, setOpen }) => {
    const classes = useStyles();

    const handleClose = (event: React.SyntheticEvent, reason: SnackbarCloseReason = "clickaway") => {
        if (reason === 'clickaway') return;
        setOpen(false)
    }

    return (
        <div className={classes.root}>
            <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={open}
                autoHideDuration={3000}
                onClose={handleClose}
            >
                <MuiAlert onClose={handleClose} severity="success" elevation={6} variant='filled'>
                    Transaction successifully created.
                </MuiAlert>
            </Snackbar>

        </div>
    )
}

export default CustumazedSnackbar;