import React from 'react';
import { useLocalStorage } from './useLocalStorage';
import { AppUI } from './AppUI';
// const defaultTodos = [
//   {text: 'Cortar cebolla', completed: true},
//   {text: 'Tomar el Curso de Intro a React.js', completed:false},
//   {text: 'Llorar con la Llorona', completed: false},
//   {text: 'Ver una pelicula', completed:true}
// ];

function App() {

  const [todos, saveTodos] = useLocalStorage('TODOS_V1',[]);
  const completedTodos = todos.filter(todo=>!!todo.completed).length;
  const totalTodos = todos.length;

  const [searchValue, setSearchValue] = React.useState('');
  console.log(searchValue);

  const searchTodos = todos.filter(todo=>{
    const noTildes = (text) => {
      return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    };
    const todoText = noTildes(todo.text.toLowerCase());
    const searchText = noTildes(searchValue.toLowerCase());
    return todoText.includes(searchText);
  })

  const completeTodo = (text) =>{
    const newTodos = [...todos];
    const indexTodo = newTodos.findIndex(todo=>todo.text===text);
    newTodos[indexTodo].completed = true;
    saveTodos(newTodos);
  }
  const deleteTodo = (text) =>{
    const newTodos = [...todos];
    const indexTodo = newTodos.findIndex(todo=>todo.text===text);
    newTodos.splice(indexTodo, 1);
    saveTodos(newTodos);
  }

  return <AppUI
    completedTodos={completedTodos}
    searchValue={searchValue}
    setSearchValue={setSearchValue}
    totalTodos={totalTodos}
    completeTodo={completeTodo}
    deleteTodo={deleteTodo}
    searchTodos={searchTodos}
  />;
}

export default App;