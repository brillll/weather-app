import React, { useEffect, useCallback } from 'react';
//material ui
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

//components
import LocationSearch from '../../components/LocationSearch/LocationSearch';
import LocationCurrentConditons from '../../components/LocationCurrentConditions/LocationCurrentConditions';
import LocationForecast from '../../components/LocationForecast/LocationForecast';
// import {forcastDummyData} from '../../dummyData/dummyData';
//redux
import { useSelector, useDispatch } from 'react-redux';
import { requestCurrentConditions, requestLocationForecast, setSelectedLocation } from '../../actions/actionsForecast';

const Forecast = () => {
    const isMetric = useSelector(state => state.tempType.isMetric);

    const currentConditions = useSelector(state => state.currentConditions.conditions);
    const locationForecast = useSelector(state => state.locationForecast.forecast);
    const selectedLocation = useSelector(state => state.selectedLocation.location);
    // const currentConditions = forcastDummyData.currentConditions[0];
    // const locationForecast = forcastDummyData.forecast;
    const isLoading =  useSelector(state => state.currentConditions.loading);
    
    const dispatch = useDispatch();
    
    const setSelectedCity = (location) => {   
        dispatch(setSelectedLocation(location));
    };
    

    const getLocationConditions = useCallback(
        locationKey => dispatch(requestCurrentConditions(locationKey))
        , [dispatch]
    ); 
        
    const getLocationForecast = useCallback(
        locationKey => dispatch(requestLocationForecast(locationKey, isMetric))
        , [dispatch, isMetric]
    );


    const useStyles = makeStyles(theme => ({
        root: {
            padding: '10px',
        },
        paper: {
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },
    }));

    useEffect(() => {
        if(selectedLocation){
            getLocationConditions(selectedLocation.key);
        }
    }, [selectedLocation, getLocationConditions]);

    useEffect(() => {
        if(selectedLocation){
            getLocationForecast(selectedLocation.key);
        }
    }, [selectedLocation, getLocationForecast]);
    
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container>
                <Grid item xs={6}>
                    <LocationSearch onSelection={setSelectedCity}/> 
                </Grid>
                {!isLoading && selectedLocation ? (
                    <Grid item xs={12}>
                        <Card>
                            <LocationCurrentConditons selectedLocation={selectedLocation} currentConditions={currentConditions} isMetric={isMetric}/>
                            {locationForecast && <LocationForecast locationForecast={locationForecast} />}
                        </Card>
                    </Grid>
                ) : ''
                }
            </Grid>
        </div>
    );
}

export default Forecast;




//REDUX WITHOUT HOOKS
// const mapStateToProps = state => ({
//     currentConditions: state.currentConditions.conditions,
//     isLoading: state.currentConditions.loading,
//     locationForecast: state.locationForecast.forecast
// })

// const mapDispatchToProps = dispatch => ({
//     getLocationConditions: locationKey => dispatch(requestCurrentConditions(locationKey)),
//     getLocationForecast: locationKey => dispatch(requestLocationForecast(locationKey))
// })