import React from 'react'
import { Grid, Typography, Card, CardContent } from '@material-ui/core';
import CountUp from 'react-countup';

import styles from './Cards.module.css'


const Cards = (props) => {
    console.log(props.data);
    const { data: { confirmed, recovered, deaths, lastUpdate } } = props;
    if (!confirmed) {
        return <h1> Loading...</h1>
    }
    return (
        <div className={styles.container}>
            <Grid container spacing={3}>
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color='textsecondary' gutterBottom>Infected</Typography>
                        <Typography variant='h5'>
                            <CountUp
                                start={0}
                                end={confirmed.value}
                                duration={2.75}
                                separator=','
                            />
                            </Typography>
                        <Typography color='textsecondary'>{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant='body2'> Number of active cases of COVID-19</Typography>
                    </CardContent>                    
                </Grid>
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color='textsecondary' gutterBottom>Recovered</Typography>
                        <Typography variant='h5'> {recovered.value}</Typography>
                        <Typography color='textsecondary'>{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant='body2'> Number of active cases of COVID-19</Typography>
                    </CardContent>                    
                </Grid>
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color='textsecondary' gutterBottom>Deaths</Typography>
                        <Typography variant='h5'> {deaths.value}</Typography>
                        <Typography color='textsecondary'>{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant='body2'> Number of active cases of COVID-19</Typography>
                    </CardContent>                    
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards
