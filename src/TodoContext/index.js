import React from "react";
import {useSearch} from "../useSearch";

const TodoContext = React.createContext()

const defaultTodos = [
    {text: 'Abrir los ojos', completed: true},
    {text: 'Respirar', completed: false},
    {text: 'Desayunar', completed: true},
    {text: 'Cepillarse los dientes', completed: false},
    {text: 'Usar estados derivados', completed: true}
  ];
  

function TodoProvider({children}){
  const [todos, setTodos] = React.useState(defaultTodos);
  const [openModal, setOpenModal] = React.useState(false);
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;
  const {filteredTodos, searchValue, setSearchValue} = 
  useSearch({dataSet: todos, keys: ["text"]});


  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    setTodos(newTodos);
  }
  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  }
  const createTodo = (text) => {
    const newTodos = [...todos, {
      text: text,
      completed: false
    }];
    setTodos(newTodos);
  }
  const focusNewTodoInput = (boolean) => {
    if (boolean) {
      document.getElementById('newTodoInput').focus();
    }
  }

    return (
        <TodoContext.Provider value={{
            completedTodos,
            totalTodos,
            todos,
            createTodo,
            searchValue,
            setSearchValue,
            filteredTodos,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal,
            focusNewTodoInput
        }}>
            {children}
        </TodoContext.Provider>
    );
}

export {TodoContext, TodoProvider}