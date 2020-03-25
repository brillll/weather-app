import React from 'react';
import './LocationCurrentConditions.css';
//material ui
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';

// import FavoriteIcon from '@material-ui/icons/Favorite';
import Typography from '@material-ui/core/Typography';

import FavoriteButton from '../FavoriteButton/FavoriteButton';

const useStyles = makeStyles({
    card: {
        width: '100%',
        backgroundColor: 'white',
        color: "#242940",
    },
    media: {
        height: '50%',
    },
    currentCondition: {
        marginTop: '100px'
    },
});

export default function LocationCurrentConditons({ selectedLocation, currentConditions, isMetric }) {
    
    const classes = useStyles();
    
    const findWeatherIcon = (iconKey) => {
        return require(`../../textures/weather_icons/${iconKey}.png`);
    }

    const showFormatedData = (date) => {
        let res = ''
        let currentDate = new Date(date)
        res = currentDate.getDate() + '/' + (currentDate.getMonth()+1) + ', ' + currentDate.getHours() + ':' + currentDate.getMinutes(); 
        
        return res
    }
        
    

    return currentConditions && (
        
        <Card className={classes.card}>
            <CardHeader 
                action={
                    <FavoriteButton selectedLocation={selectedLocation} />
                }
                title={
                    <Typography gutterBottom variant="h3" component="h2" color="inherit">
                        {selectedLocation.name}
                        <Typography variant="body2">
                            {showFormatedData(currentConditions.LocalObservationDateTime)}
                        </Typography>
                    </Typography>
                }
            >
            </CardHeader>
            <br/>
            <br/>
            <CardContent>
                <Typography color="textSecondary" variant="body1" className={classes.currentCondition}>
                    <img src={findWeatherIcon(currentConditions.WeatherIcon)} alt="current icon" style={{verticalAlign:'middle'}} className="weatherIcon" />
                    {
                        `${currentConditions.WeatherText}`
                    }
                </Typography>
                <Typography variant="h1" component="h1" display={'inline'}>          
                    {
                        isMetric ? 
                        currentConditions.Temperature.Metric.Value : 
                        currentConditions.Temperature.Imperial.Value 
                    }
                </Typography>
                <Typography variant="h4" display={'inline'}>
                    {isMetric ? ' C°' : ' F°'}
                </Typography>
            </CardContent>
        </Card>
    );
}