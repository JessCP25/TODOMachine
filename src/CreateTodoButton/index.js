import {FaPlus} from 'react-icons/fa';
import './CreateTodoButton.css';

function CreateTodoButton(){
  return (
    <button className='btnAdd'
      onClick={()=>console.log('agregaste una tarea')}
    ><FaPlus style={{fontSize: '24px'}}/></button>
  );
}

export {CreateTodoButton};