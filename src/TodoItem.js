import { FaXmark } from 'react-icons/fa6';
import './TodoItem.css';

function TodoItem({text, completed}) {
  return (
    <li>
      <div className='Task'>
      <label class="container">
        <input type="radio" className="radio"/>
        <span className="checkmark"></span>
      </label>
        <p>{text}</p>
      </div>
      <FaXmark style={{fontSize: '22px', cursor: 'pointer'}}/>
    </li>
  );
}

export {TodoItem};