
import { 
    LOCATIONS_LIST_REQUEST,
    LOCATIONS_LIST_SUCCESS,
    LOCATIONS_LIST_FAILED
} from '../constants/constantsSearch';

const initialStateLocations = {
    isLoading: false,
    locations: [],
    error: ''
}

export const searchLocations = (state=initialStateLocations, action={}) => {
    switch(action.type) {
        case LOCATIONS_LIST_REQUEST:
            return {
                ...state, 
                isLoading: true
            }
        case LOCATIONS_LIST_SUCCESS:
            return {
                ...state, 
                isLoading: false,
                locations: action.payload,
            }
        case LOCATIONS_LIST_FAILED:
            return {
                ...state, 
                isLoading: false,
                error: action.payload
            }
        default: return state
    }
}

