import { 
    SET_FAVORITES,

} from '../constants/constantsFavorites';

const initialState = {
    favorites: JSON.parse(localStorage.getItem('Favorites')) || []
}

export const favoritesList = (state=initialState, action={}) => {
    switch(action.type) {
        case SET_FAVORITES:
            return {
                ...state,
                favorites: action.payload
            }
        default: return state
    }
}