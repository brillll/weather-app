import React, { useState , useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
//material ui
import StarBorderRoundedIcon from '@material-ui/icons/StarBorderRounded';
import StarRoundedIcon from '@material-ui/icons/StarRounded';
import IconButton from '@material-ui/core/IconButton';
// import FavoriteIcon from '@material-ui/icons/Favorite';
import { setFavorites } from '../../actions/actionsFavorites';


const checkSavedInFavorites = (favorites, location) => {   
    return favorites.find(item => item.name === location.name) !== undefined
}

export default function FavoriteButton({ selectedLocation }) {
    const favoritesList = useSelector(state => state.favoritesList.favorites);

    const [isFavorite, setIsFavorite] = useState(checkSavedInFavorites(favoritesList, selectedLocation));
    
    useEffect(() => {
        setIsFavorite(checkSavedInFavorites(favoritesList, selectedLocation));
    }, [selectedLocation, favoritesList]);
    
    const dispatch = useDispatch();
    
    const updateFavorites = (favorites) => dispatch(setFavorites(favorites));

    const manageFavorites = () => {
        let favoritesArray = [...favoritesList];   

        if(!isFavorite){
            favoritesArray.push(selectedLocation);
            localStorage.setItem('Favorites', JSON.stringify(favoritesArray));
        }else{
            favoritesArray = favoritesArray.filter(item => item.key !== selectedLocation.key);
            localStorage.setItem('Favorites', JSON.stringify(favoritesArray));
        }
        updateFavorites(favoritesArray);
        
    }

    return (
        <div>
            Add to favorites
            <IconButton aria-label="favorites" onClick={manageFavorites}>
                {!isFavorite ? 
                    <StarBorderRoundedIcon fontSize="large" htmlColor="" style={{verticalAlign:'middle'}}/> :
                    <StarRoundedIcon fontSize="large" htmlColor="#7DD4D4" style={{verticalAlign:'middle'}}/> 
                }
            </IconButton>
        </div>
    );
}



