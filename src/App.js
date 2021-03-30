import React, { useState } from 'react';
import Search from './components/Search/Search';
import { SearchService } from './service/search.service';
import LocationAndDate from './components/LocationAndDate/LocationAndDate';
import Weather from './components/Weather/Weather';


function App() {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = (event) => {
    SearchService(event, query, (result)=>{
      setWeather(result);
      setQuery('');
    });
  }

  return (
    <div className={
      (typeof weather.main !="undefined")
        ?((weather.main.temp > 15)
          ? 'app-warm'
          : 'app')
      :'app'}>
      <main>
        <Search value={query} onChange={setQuery} onKeyPress={search}/>
        {(typeof weather.main != "undefined") ? (
        <div>
          <LocationAndDate weather={weather}/>
          <Weather weather={weather}/>
        </div>
        ) : ('')}
      </main>
    </div>
  );
}

export default App;
