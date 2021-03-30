import { WEATHER_API } from '../utils/constants'


export const SearchService = (event, query, callBack) => {
    const {key, baseURL} = WEATHER_API;
    if(event.key === "Enter") {
      fetch(`${baseURL}weather?q=${query}&units=metric&APPID=${key}`)
        .then(response => response.json())
        .then(result => {
            callBack(result);
        });
    }
  }