import React from 'react'

const Search = ({onDataReceived}) => {
  const handleChange = (event) => {
    onDataReceived(event.target.value);
  }
  return (
    <div>
        <form>
            <input className="search" type="search" placeholder='Search Food' onChange={handleChange}></input>
          </form>
    </div>
  )
}

export default Search;