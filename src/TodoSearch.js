import { FaSearch} from 'react-icons/fa';
import './TodoSearch.css';
import React from 'react';

function TodoSearch({searchValue, setSearchValue}) {
  return (
    <>
      <div className='search'>
        <input id="itemTask" placeholder="Search..."
        value={searchValue}
          onChange={(event)=>{
            setSearchValue(event.target.value);
          }}
        />
        <FaSearch style={{cursor: 'pointer'}}/>
      </div>
    </>
  );
}

export {TodoSearch};