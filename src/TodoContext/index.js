import React from "react";
import { useLocalStorage } from "./useLocalStorage";
const TodoContext = React.createContext();

function TodoProvider ({children}){

  const {item: todos,
    saveItem: saveTodos,
    loading,
    error
  } = useLocalStorage('TODOS_V1',[]);
  const [searchValue, setSearchValue] = React.useState('');
  const [openModal, setOpenModal] = React.useState(false);

  const completedTodos = todos.filter(todo=>!!todo.completed).length;
  const totalTodos = todos.length;


  const searchTodos = todos.filter(todo=>{
    if (!todo || typeof todo.text !== 'string') {
      return false; // Evitar valores no válidos
    }
    const noTildes = (text) => {
      return text.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    };
    const todoText = noTildes(todo.text.toLowerCase());
    const searchText = noTildes(searchValue.toLowerCase());
    return todoText.includes(searchText);
  })

  const addTodo = (text)=>{
    const newTodos = [...todos];
    newTodos.push({
      text,
      completed: false
    })
    saveTodos(newTodos);
  };

  const completeTodo = (text) =>{
    const newTodos = [...todos];
    const indexTodo = newTodos.findIndex(todo=>todo.text===text);
    newTodos[indexTodo].completed = true;
    saveTodos(newTodos);
  };
  const deleteTodo = (text) =>{
    const newTodos = [...todos];
    const indexTodo = newTodos.findIndex(todo=>todo.text===text);
    newTodos.splice(indexTodo, 1);
    saveTodos(newTodos);
  };
  return(
    <TodoContext.Provider value={{
      loading,
      error,
      completedTodos,
      totalTodos,
      searchValue,
      setSearchValue,
      searchTodos,
      completeTodo,
      deleteTodo,
      openModal,
      setOpenModal,
      addTodo,
    }}>
      {children}
    </TodoContext.Provider>
  );
};

export {TodoContext, TodoProvider};