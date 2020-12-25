import React from 'react';
import { Grid } from '@material-ui/core';
import Details from 'components/Details';
import Main from 'components/Main';

import useStyles from './style';

import './index.css';
import Type from 'interfaces/Transaction/Type';
import { Provider } from 'context';


const App = () => {
    const classes = useStyles();

    return (
        <Provider>
            <Grid className={classes.grid} container spacing={0} alignItems="center" justify="center" style={{ height: '100vh' }}>
                {/* Grid item, onde quando a tela for extra pequena, o cula toda a linha
                caso a tela for pequena ocupa 4 colunas (cabendo 3 elementos na linha) */}
                <Grid item xs={12} sm={3}>
                    <Details title={Type.Income} />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Main />
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Details title={Type.Expense} />
                </Grid>
            </Grid>
        </Provider>
    );
};


export default App;


