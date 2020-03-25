import { 
    SET_FAVORITES,
} from '../constants/constantsFavorites';

export const setFavorites = (favorites) => ({
    type: SET_FAVORITES,
    payload: favorites  
})