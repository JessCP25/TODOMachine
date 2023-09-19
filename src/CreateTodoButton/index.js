import React from 'react';
import { TodoContext } from '../TodoContext';
import {FaPlus} from 'react-icons/fa';
import './CreateTodoButton.css';

function CreateTodoButton(){
  const {openModal, setOpenModal} = React.useContext(TodoContext);
  const toggleModal = () => {
    setOpenModal(!openModal);
  }
  return (
    <button className='btnAdd'
      onClick={toggleModal}
    ><FaPlus style={{fontSize: '24px'}}/></button>
  );
}

export {CreateTodoButton};