import './TodoCounter.css';

function TodoCounter({total, completed}) {
  return (
    <>
      <h1>YOUR TASKS</h1>
      <h2>Completed <span>{completed}</span> to <span>{total}</span>.</h2>
    </>
  );
}

export {TodoCounter};