import { FaXmark } from 'react-icons/fa6';
import './TodoItem.css';

function TodoItem({text, completed, onComplete, onDelete}) {
  return (
    <li className={`itemTask ${completed&&"item--active"}`}>
      <div className='Task'>
      <label className="containerCheck">
        <input type="radio" className="radio"/>
        <span className={`checkmark ${completed&&"checkmark--active"}`}
          onClick={onComplete}
        ></span>
      </label>
        <p className={`todoItem__p ${completed&&"todoItem__p--complete"}`}>{text}</p>
      </div>
      <FaXmark style={{fontSize: '22px', cursor: 'pointer'}}
        onClick={onDelete}
      />
    </li>
  );
}

export {TodoItem};