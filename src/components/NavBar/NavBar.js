import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import ForecastTypeSwitch from '../ForecastTypeSwitch/ForecastTypeSwitch';

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
    AppBar: {
        width: '100%',
        backgroundColor: '#242940',
        display: 'flex',
        flexDirection: 'row-reverse'
    }
}));

export default function NavBar( { setRoute, route } ) {
    const classes = useStyles();
    const [value, setValue] = useState(0);

    useEffect(() => {
        route === '/' ? setValue(0) : setValue(1); 
    }, [route]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        newValue === 0 ? setRoute('/') : setRoute('/Favorites')
    };


    return (
    <div className={classes.root}>
        <AppBar position="static" className={classes.AppBar}>
            <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                <Tab label="Forecast" {...a11yProps(0)} />
                <Tab label="Favorites" {...a11yProps(1)} />
            </Tabs>
            <ForecastTypeSwitch />
        </AppBar>
        
                
    </div>
);
}