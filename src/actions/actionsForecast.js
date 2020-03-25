
import axios from 'axios';
import {currentConditionsUrl, forecastUrl} from '../weatherAPI/config';

import {
    ON_LOCATION_SELECT,
    CURRENT_CONDITIONS_REQUEST,
    CURRENT_CONDITIONS_SUCCESS,
    CURRENT_CONDITIONS_FAILED,
    FORECAST_REQUEST,
    FORECAST_SUCCESS,
    FORECAST_FAILED,
} from '../constants/constantsForecast';

async function getCurrentConditions(dispatch, locationKey) {
    dispatch({
        type: CURRENT_CONDITIONS_REQUEST
    })
    try{
        const condtions = await axios(currentConditionsUrl(locationKey))
        dispatch({
            type: CURRENT_CONDITIONS_SUCCESS,
            payload: condtions.data[0]
        })

    }catch(err){
        dispatch({
            type: CURRENT_CONDITIONS_FAILED,
            payload: err
        })
    }
}

async function getLocationForecast(dispatch, locationKey, isMetric){
    dispatch({
        type: FORECAST_REQUEST
    })
    try{
        const forecast = await axios(forecastUrl(locationKey, isMetric))
        dispatch({
            type: FORECAST_SUCCESS,
            payload: forecast.data
        })

    }catch(err){
        dispatch({
            type: FORECAST_FAILED,
            payload: err
        })
    }
}

export const setSelectedLocation = (location) => ({
  type: ON_LOCATION_SELECT,
  payload: location  
})

export const requestCurrentConditions = locationKey => (dispatch) => {
    getCurrentConditions(dispatch, locationKey)
}

export const requestLocationForecast = (locationKey, isMetric) => (dispatch) => {
    getLocationForecast(dispatch, locationKey, isMetric)
}