import React from 'react'
import  './search-dropdown.css'

const SearchDropdown = ({data, handleSelect}) => {   
    return (
        <div id="myDropdown" class="dropdown-content">  
        {data.map(e => (
            <a className="drop-menu text-dark" onClick={() => handleSelect(e.title)} >{e.title}</a>

        ))}    
      
        </div>
    )
}

export default SearchDropdown
