import { 
    ON_LOCATION_SELECT,
    CURRENT_CONDITIONS_REQUEST,
    CURRENT_CONDITIONS_SUCCESS,
    CURRENT_CONDITIONS_FAILED,
    FORECAST_REQUEST,
    FORECAST_SUCCESS,
    FORECAST_FAILED,

} from '../constants/constantsForecast';

const initialSelectedLocation = {
    location: {name: "Tel Aviv", key: "215854"}
}

export const selectedLocation = (state=initialSelectedLocation, action={}) => {
    switch(action.type) {
        case ON_LOCATION_SELECT:
            return {
                ...state,
                location: action.payload
            }
        default: return state
    }
}


const initialStateCurrentConditions = {
    isLoading: false,
    conditions: null,
    error: ''
}

export const currentConditions = (state=initialStateCurrentConditions, action={}) => {
    switch(action.type) {
        case CURRENT_CONDITIONS_REQUEST:
            return {
                ...state, 
                isLoading: true
            }
        case CURRENT_CONDITIONS_SUCCESS:
            return {
                ...state, 
                isLoading: false,
                conditions: action.payload,
            }
        case CURRENT_CONDITIONS_FAILED:
            return {
                ...state, 
                isLoading: false,
                error: action.payload
            }
        default: return state
    }
}

const initialStateForecast = {
    isLoading: false,
    forecast: null,
    error: ''
}

export const locationForecast = (state=initialStateForecast, action={}) => {
    switch(action.type) {
        case FORECAST_REQUEST:
            return {
                ...state, 
                isLoading: true
            }
        case FORECAST_SUCCESS:
            return {
                ...state, 
                isLoading: false,
                forecast: action.payload,
            }
        case FORECAST_FAILED:
            return {
                ...state, 
                isLoading: false,
                error: action.payload
            }
        default: return state
    }
}


