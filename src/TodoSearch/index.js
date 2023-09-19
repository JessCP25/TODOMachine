import { FaSearch} from 'react-icons/fa';
import { TodoContext } from '../TodoContext';
import './TodoSearch.css';
import React from 'react';

function TodoSearch() {
  const {searchValue, setSearchValue} = React.useContext(TodoContext);
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