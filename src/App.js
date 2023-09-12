import {TodoCounter} from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

const defaultTodos = [
  {text: 'Cortar cebolla', completed: true},
  {text: 'Tomar el Curso de Intro a React.js', completed:false},
  {text: 'Llorar con la Llorona', completed: false},
  {text: 'Ver una pelicula', completed:true}
];

function App() {
  return (
    <>
      <TodoCounter completed={5} total={12}/>
      <TodoSearch/>
      <TodoList>
        {defaultTodos.map(todo => (
          <TodoItem key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        ))}
      </TodoList>
      <CreateTodoButton/>
    </>
  );
}

export default App;
