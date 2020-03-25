const apiKey = 'rocl7OxTdcsOGX3Z5P2OxZ6p6JH1AzSQ';


const locationsSearchUrl = (userInput) => `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${apiKey}&q=${userInput}&language=en-us`;
const currentConditionsUrl = (locationKey) => `http://dataservice.accuweather.com/currentconditions/v1/${locationKey}?apikey=${apiKey}`;
const forecastUrl = (locationKey, isMetric) => `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}?apikey=${apiKey}&metric=${isMetric}`;


// const locationsSearchUrl = locationList;
// const currentConditionsUrl = currentConditions;
// const forecastUrl = forecast;

export {locationsSearchUrl, currentConditionsUrl, forecastUrl};