import React, { useState, useEffect } from 'react';
//redux
import { useSelector, useDispatch } from 'react-redux';
import { setSelectedLocation } from '../../actions/actionsForecast';

import axios from 'axios';
import { currentConditionsUrl } from '../../weatherAPI/config';

import { makeStyles } from '@material-ui/core/styles';
import { toast } from 'react-toastify';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        padding: '10px',
    },
    forecastDay: {
        filter: 'drop-shadow(0px 0px 10px #3335)',
    },
    favoritesContainer: {
        background: 'red'
    }
});

function ItemConditions({ item, isMetric, setSelectedCity }) {
    const [conditions, setConditions] = useState(null);
    
    useEffect(() => {
        axios(currentConditionsUrl(item.key))
        .then(({data}) => {
            setConditions(data[0]);
        })
        .catch(err => {
            toast.error('No access to AccuWeather API', {autoClose: 3000})
        });
    }, [item.key]);
    
    
    const findWeatherIcon = (iconKey) => {
        return require(`../../textures/weather_icons/${iconKey}.png`);
    }

    return (
        
            <Card>
                <CardActionArea onClick={() => setSelectedCity(item)}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h3">
                            {item.name}
                        </Typography>
                                {conditions ? (
                                    <div>
                                        <img src={findWeatherIcon(conditions.WeatherIcon) } 
                                            alt="current icon"
                                            style={{verticalAlign:'middle'}} 
                                            className="weatherIcon" 
                                        />
                                        <br />
                                        <Typography variant="h4" display={'inline'}>          
                                            {
                                                isMetric ? 
                                                conditions.Temperature.Metric.Value : 
                                                conditions.Temperature.Imperial.Value 
                                            }
                                        </Typography>
                                        <Typography variant="h4" display={'inline'}>
                                            {isMetric ? ' C°' : ' F°'}
                                        </Typography>
                                    </div>

                                    ) : null
                                }
                    </CardContent>
                </CardActionArea>
            </Card>
    )
} 

export default function Favorites({ setRoute }) {
    const classes = useStyles();
    const favorites = useSelector(state => state.favoritesList.favorites);
    const isMetric = useSelector(state => state.tempType.isMetric);
    // const selectedLocation = useSelector(state => state.selectedLocation.location);
    
    const dispatch = useDispatch();
    
    const setSelectedCity = (location) => {   
        setRoute('/');
        dispatch(setSelectedLocation(location));
    };

    return (
        <Grid container className={classes.root} spacing={1}>
            {favorites.map(item => {
                return (
                    <Grid item xs sm={3} className={classes.forecastDay} key={item.key}>
                        <ItemConditions item={item} isMetric={isMetric} setSelectedCity={setSelectedCity} />
                    </Grid>
                )
            })
            }

        </Grid>
    );
}
