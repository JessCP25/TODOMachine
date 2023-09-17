import React from "react";
import './TodosLoading.css';

function TodosLoading(){
  return (
    <>
      <div className="loading">
        <div className="loading__child"></div>
        <div className="loading__child"></div>
        <div className="loading__child"></div>
      </div>
    </>
  )
}

export {TodosLoading};