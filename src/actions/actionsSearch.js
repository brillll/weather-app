
import axios from 'axios'
import {locationsSearchUrl} from '../weatherAPI/config';

import {  
    LOCATIONS_LIST_REQUEST,
    LOCATIONS_LIST_SUCCESS,
    LOCATIONS_LIST_FAILED
} from '../constants/constantsSearch';

async function getLocations(dispatch, userInput) {
    dispatch({
        type: LOCATIONS_LIST_REQUEST
    })
    try{
        const locations = await axios(locationsSearchUrl(userInput));
        dispatch({
            type: LOCATIONS_LIST_SUCCESS,
            payload: locations.data
        })

    }catch(err){
        dispatch({
            type: LOCATIONS_LIST_FAILED,
            message: err.message || 'something went',
            payload: 'No access to AccuWeather API'
        })
    }
}

export const requestLoactions = userInput => (dispatch) => {
    getLocations(dispatch, userInput)
}

export const resetError = () => ({
    type: LOCATIONS_LIST_FAILED,
    payload: ''
})