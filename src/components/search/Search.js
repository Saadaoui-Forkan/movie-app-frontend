import React, { useState } from 'react'
import './search.css'

function Search() {
  const [search, setSearch] = useState(false)
  const handleSearch = () => {
    setSearch(!search)
  }
  return (
    <div className={search ? 'search active' : 'search'}>
      {search && <input type="text" className="input" placeholder="search ..."/>}
      <button className="btn" onClick={handleSearch}>
        <i className="fas fa-search"></i>
      </button>
    </div>
  );
}

export default Search