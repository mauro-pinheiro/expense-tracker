import React, { useEffect, useRef } from 'react';
import { createMuiTheme, CssBaseline, Grid, ThemeProvider, useMediaQuery } from '@material-ui/core';
import Details from 'components/Details';
import Main from 'components/Main';

import useStyles from './style';

import './index.css';
import Type from 'interfaces/Transaction/Type';
import { Provider } from 'context';
import { SpeechProvider, SpeechState, useSpeechContext } from '@speechly/react-client';
import { ErrorPanel, PushToTalkButton, PushToTalkButtonContainer } from '@speechly/react-ui';


const App = () => {
    const classes = useStyles();
    const {speechState} = useSpeechContext();
    const main = useRef<HTMLDivElement>(null);

    const executeScroll = () => main.current?.scrollIntoView();

    useEffect(() => {
        if(speechState === SpeechState.Recording){
            executeScroll();
        }
    }, [speechState])
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    const theme = React.useMemo(
        () =>
            createMuiTheme({
                palette: {
                    type: prefersDarkMode ? 'dark' : 'light',
                },
            }),
        [prefersDarkMode],
    );

    return (
        <ThemeProvider theme={theme}>
            <SpeechProvider appId="a0f92e1f-ce5d-4c65-b81d-c38397b2cef6" language="en-US">
                <Provider>
                    <CssBaseline />
                    <Grid className={classes.grid} container spacing={0} alignItems="center" justify="center" style={{ height: '100vh' }}>
                        {/* Grid item, onde quando a tela for extra pequena, o cula toda a linha
                        caso a tela for pequena ocupa 4 colunas (cabendo 3 elementos na linha) */}
                        <Grid item xs={12} sm={3} className={classes.mobile}>
                            <Details title={Type.Income} />
                        </Grid>
                        <Grid ref={main} item xs={12} sm={3} className={classes.main}>
                            <Main />
                        </Grid>
                        <Grid item xs={12} sm={3} className={classes.desktop}>
                            <Details title={Type.Income} />
                        </Grid>
                        <Grid item xs={12} sm={3} className={classes.last}>
                            <Details title={Type.Expense} />
                        </Grid>
                    </Grid>
                    <PushToTalkButtonContainer>
                        <PushToTalkButton />
                        <ErrorPanel />
                    </PushToTalkButtonContainer>
                </Provider>
            </SpeechProvider>
        </ThemeProvider>
    );
};


export default App;


