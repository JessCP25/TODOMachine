import React from "react";
import { FaXmark } from 'react-icons/fa6';
import './DeleteIcon.css';

function DeleteIcon({onDelete}) {
  return (
    <FaXmark
    onClick={onDelete}
    className="iconDeleteColor"
    />
  );
}

export {DeleteIcon};