import React from 'react';
import './TodoCounter.css';
import { TodoContext } from '../TodoContext';

function TodoCounter() {
  const {completedTodos, totalTodos} = React.useContext(TodoContext);
  return (
    <>
      <h1>YOUR TASKS</h1>
      {(totalTodos === completedTodos && completedTodos !== 0)?
      <h2>Congratulations, finish all tasks.</h2>
      :
      <h2>Completed <span>{completedTodos}</span> to <span>{totalTodos}</span>.</h2>}
    </>
  );
}

export {TodoCounter};