import React from 'react';
import { dateBuilder } from '../../utils/helper';

const LocationAndDate = ({weather}) => {
    return (
        <div className="location-box">
        <div className="location">{weather.name}, {weather.sys.country}</div>
        <div className="date">{dateBuilder(new Date())}</div>
      </div>
    )
}

export default LocationAndDate;