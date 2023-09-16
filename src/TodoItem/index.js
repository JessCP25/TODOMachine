import {CompleteIcon} from '../TodoIcon/CompleteIcon.js';
import {DeleteIcon} from '../TodoIcon/DeleteIcon.js';
import './TodoItem.css';

function TodoItem({text, completed, onComplete, onDelete}) {
  return (
    <li className={`itemTask ${completed&&"item--active"}`}>
      <div className='Task'>
      <CompleteIcon completed={completed} onComplete={onComplete}/>
      {/* <label className="containerCheck">
        <input type="radio" className="radio"/>
        <span className={`checkmark ${completed&&"checkmark--active"}`}
          onClick={onComplete}
        ></span>
      </label> */}
        <p className={`todoItem__p ${completed&&"todoItem__p--complete"}`}>{text}</p>
      </div>
      <DeleteIcon onDelete={onDelete}/>
      {/* <FaXmark style={{fontSize: '22px', cursor: 'pointer'}}
        onClick={onDelete}
      /> */}
    </li>
  );
}

export {TodoItem};