import { FaSearch} from 'react-icons/fa';
import './TodoSearch.css';

function TodoSearch() {
  return (
    <>
      <div className='search'>
        <input id="itemTask" placeholder="Search..."/>
        <FaSearch style={{cursor: 'pointer'}}/>
      </div>
    </>
  );
}

export {TodoSearch};