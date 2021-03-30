import React  from 'react';

const Search = ({value, onChange, onKeyPress}) => {
    return (
        <div className="search-box">
        <input 
          type="text"
          className="search-bar"
          placeholder="Find your weather..."
          onChange={e => onChange(e.target.value)}
          value={value}
          onKeyPress={onKeyPress}
        />
      </div>
    )
}

export default Search;