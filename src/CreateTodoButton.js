import {FaPlus} from 'react-icons/fa';
import './CreateTodoButton.css';

function CreateTodoButton(){
  return (
    <button className='btnAdd'><FaPlus style={{fontSize: '24px'}}/></button>
  );
}

export {CreateTodoButton};