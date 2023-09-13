import './TodoCounter.css';

function TodoCounter({total, completed}) {
  return (
    <>
      <h1>YOUR TASKS</h1>
      <h2>Completed {completed} to {total}.</h2>
    </>
  );
}

export {TodoCounter};