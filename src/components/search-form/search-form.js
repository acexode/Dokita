import React, { useState, createRef } from 'react'
import './search-form.css'
import { useHistory } from 'react-router-dom'
import SearchDropdown from './search-dropdown'
import { allPractitioners } from '../../list'


const SearchForm = () => {
    let history = useHistory()
    const [specialty, setSpecialty] = useState('')
    const [practitioners, setpractitioners] = useState(allPractitioners)
    const [location, setlocation] = useState('Abuja')
    const [showSpecialties, setshowSpecialties] = useState(false)
    let specialtyRef = createRef()
    const handleChange = (e) =>{
        if(e.target.value.length >0){
            setshowSpecialties(true)
            let val = e.target.value.toLowerCase()
            let filtered = allPractitioners.filter(e => e.title.toLowerCase().includes(val))
            setpractitioners(filtered)
        }
        console.log(e.target.value)      
        
    }
    const handleSelect = (e) =>{
        
        setSpecialty(e)
        specialtyRef.current.value = e
        setshowSpecialties(false)
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(location)
        console.log(specialty)
        history.push(`/practitioners`,{specialty, location})
    }
    return (
        <div className="container ">

            <form onSubmit={handleSubmit}>
            <div class="form-row">
              <div class="col-12 col-md-6 mb-2 mb-md-0">
              <svg width="20" height="20" viewBox="0 0 20 20" class="searchbar-input-icon pt-1"><path d="M19.6 16.92c.48.6.53 1.12.14 1.58l-1.2 1.2c-.58.48-1.16.48-1.72 0l-4.8-4.86a7.6 7.6 0 01-3.96 1.1 7.65 7.65 0 01-5.64-2.44A7.8 7.8 0 017.82 0C10 0 11.9.8 13.5 2.42a7.74 7.74 0 011.23 9.74l4.86 4.76zM2.36 7.86c0 1.5.58 2.8 1.74 3.96 1.16 1.16 2.48 1.73 3.96 1.73s2.76-.54 3.8-1.63a5.35 5.35 0 00-.09-7.76A5.44 5.44 0 007.82 2.4c-1.52 0-2.8.55-3.8 1.64a5 5 0 00-1.65 3.8z"></path></svg>
                <input ref={specialtyRef}  name="specialty" autoComplete="off" onChange={handleChange}class="form-control searchbar  form-control-lg" placeholder="Doctor, establishment, specialty…"/>
                {showSpecialties && <SearchDropdown data={practitioners} handleSelect={handleSelect} />}
              </div>
              <div class="col-12 col-md-3 mb-2 mb-md-0">
              <svg width="16" height="20" viewBox="0 0 16 20" class="searchbar-input-icon">
                <path d="M16 7.5c0-1-.2-2-.7-3-.3-.8-1-1.6-1.7-2.3A8.69 8.69 0 008 0C7 0 6 .2 5 .6c-1 .4-2 1-2.7 1.6C1.6 3 1 3.7.7 4.6a6.4 6.4 0 000 5.8c0 .4.4 1 .8 1.4l5.2 7.5c.4.5.8.7 1.3.7s1-.2 1.3-.7l5.2-7.5c.4-.5.7-1 .8-1.4.5-1 .7-2 .7-3zm-6 2c-.5.5-1.2.8-2 .8s-1.5-.3-2-1c-.7-.4-1-1-1-1.8s.3-1.4 1-2c.5-.5 1.2-.8 2-.8s1.5.3 2 .8c.7.6 1 1.2 1 2 0 .7-.3 1.4-1 2z"></path></svg>
                <input  class="form-control searchbar no-radius form-control-lg" autoComplete="off" placeholder="location" name="location" onChange={(e) => setSpecialty(e.target.value)}/>
              </div>
              <div class="col-12  col-md-3">
                <button type="submit" class="btn search-submit no-radius btn-block btn-lg">
                    Search 
                    <svg class="searchbar-submit-button-arrow" width="10" height="16" viewBox="0 0 10 16"><path d="M2.7.5c-.2-.3-.5-.5-1-.5S1 .2.5.5C-.2 1-.2 2 .5 2.7L5.7 8 .5 13.5c-.7.8-.7 1.5 0 2.2.3.3.7.4 1.2.4.4 0 .8 0 1-.3L9 9c.3-.2.4-.5.4-1 0-.4 0-.8-.4-1L2.7.5z"></path></svg>
                </button>
              </div>
            </div>
          </form>
            {/* <form onSubmit={handleSubmit} class="row searchbar ml-2">
                <div class="col-md-6 searchbar-query ml-5">
                <div>
                    <div class="searchbar-input-wrapper">
                        <svg width="20" height="20" viewBox="0 0 20 20" class="searchbar-input-icon"><path d="M19.6 16.92c.48.6.53 1.12.14 1.58l-1.2 1.2c-.58.48-1.16.48-1.72 0l-4.8-4.86a7.6 7.6 0 01-3.96 1.1 7.65 7.65 0 01-5.64-2.44A7.8 7.8 0 017.82 0C10 0 11.9.8 13.5 2.42a7.74 7.74 0 011.23 9.74l4.86 4.76zM2.36 7.86c0 1.5.58 2.8 1.74 3.96 1.16 1.16 2.48 1.73 3.96 1.73s2.76-.54 3.8-1.63a5.35 5.35 0 00-.09-7.76A5.44 5.44 0 007.82 2.4c-1.52 0-2.8.55-3.8 1.64a5 5 0 00-1.65 3.8z"></path></svg>
                        <input ref={specialtyRef}  name="specialty" autoComplete="off" onChange={handleChange} class="searchbar-input searchbar-query-input" placeholder="Doctor, establishment, specialty…"  />                        
                        {showSpecialties && <SearchDropdown data={practitioners} handleSelect={handleSelect} />}
                        </div>
                    </div>
                        </div>
                        <div class="searchbar-place-submit col-md-5">
                    <div class="searchbar-place">                    
                <div class="searchbar-input-wrapper searchbar-input-hide-overflowing-around-me">
                <svg width="16" height="20" viewBox="0 0 16 20" class="searchbar-input-icon">
                <path d="M16 7.5c0-1-.2-2-.7-3-.3-.8-1-1.6-1.7-2.3A8.69 8.69 0 008 0C7 0 6 .2 5 .6c-1 .4-2 1-2.7 1.6C1.6 3 1 3.7.7 4.6a6.4 6.4 0 000 5.8c0 .4.4 1 .8 1.4l5.2 7.5c.4.5.8.7 1.3.7s1-.2 1.3-.7l5.2-7.5c.4-.5.7-1 .8-1.4.5-1 .7-2 .7-3zm-6 2c-.5.5-1.2.8-2 .8s-1.5-.3-2-1c-.7-.4-1-1-1-1.8s.3-1.4 1-2c.5-.5 1.2-.8 2-.8s1.5.3 2 .8c.7.6 1 1.2 1 2 0 .7-.3 1.4-1 2z"></path></svg>
                <input class="searchbar-input searchbar-place-input"  autoComplete="off" placeholder="location" name="location" onChange={(e) => setSpecialty(e.target.value)}  />              
                  
                    </div>
                    </div>
                    <button class="Tappable-inactive dl-button-primary searchbar-submit-button dl-button  inline-tap" role="button" type="submit" >
                        <span class="dl-button-label"><span class="searchbar-submit-button-label">
                            <font style={{verticalAlign: 'inherit'}}><font style={{verticalAlign: 'inherit'}}>Search</font></font></span>
                </button>
                    
            </div>
            </form> */}
        </div>
    )
}

export default SearchForm
