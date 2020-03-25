import { 
    SET_TEMP_TYPE,
} from '../constants/constantsTempType';

const initialState = {
    isMetric: true 
}

export const tempType = (state=initialState, action={}) => {
    switch(action.type) {
        case SET_TEMP_TYPE:
            return {
                ...state,
                isMetric: action.payload
            }
        default: return state
    }
}