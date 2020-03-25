import { 
    SET_TEMP_TYPE,
} from '../constants/constantsTempType';

export const setTempType = (isMetric) => ({
    type: SET_TEMP_TYPE,
    payload: isMetric  
})