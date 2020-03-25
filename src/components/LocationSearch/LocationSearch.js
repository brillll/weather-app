/* eslint-disable no-use-before-define */
import React, {useEffect, useCallback} from 'react';
import {DebounceInput} from 'react-debounce-input';
import './LocationSearch.css';
import { toast } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';
import {TextField, CircularProgress} from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { requestLoactions, resetError } from '../../actions/actionsSearch';


function LocationsSearch({ onSelection }) {
    const isLoading = useSelector(state => state.searchLocations.isLoading);
    const foundLocations = useSelector(state => state.searchLocations.locations);
    const failedLocationsSearch = useSelector(state => state.searchLocations.error)
    
    const dispatch = useDispatch();
    const getLocationsList = userInput => dispatch(requestLoactions(userInput));
    const resetErrorMessage = useCallback(() => dispatch(resetError()),[dispatch]);
    
    useEffect(() => {
        if(failedLocationsSearch.length > 0){
            toast.error(failedLocationsSearch, {autoClose: 3000})
            resetErrorMessage()
        }
    }, [failedLocationsSearch, resetErrorMessage]);

    const onSearch = (event) => {
        const { value: input } = event.target;
        if(input !== ''){
            getLocationsList(input);
        }
    }

    const onSelect = (e, input) => {   
        if(input !== ""){
            for(let location of foundLocations){
                if(input === location.LocalizedName){
                    onSelection({name: location.LocalizedName, key: location.Key})
                }
            }
        }
    }
    return (
        <Autocomplete className="searchField"
            id="free-solo-demo"
            freeSolo
            options={foundLocations.map(city => city.LocalizedName)}
            onChange={(e, option) => {onSelect(e, option)}}
            loading={isLoading}
            renderInput={params => (
                <DebounceInput
                    {...params}
                    debounceTimeout={500}
                    element={TextField}
                    onChange={onSearch}
                    label="Location search" variant="filled" fullWidth
                    InputProps={{
                    ...params.InputProps,
                    endAdornment: (
                        <React.Fragment>
                            {isLoading ? <CircularProgress color="inherit" size={20} /> : null}
                            {params.InputProps.endAdornment}
                        </React.Fragment>
                    )}}
                />
            
            )}
    />
    )
}

export default LocationsSearch