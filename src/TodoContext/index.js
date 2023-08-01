import React from "react";
import {useSearch} from "../useSearch";

const TodoContext = React.createContext()

const defaultTodos = [
    {text: 'Abrir los ojos', completed: true, stage: 2},
    {text: 'Respirar', completed: false, stage: 0},
    {text: 'Desayunar', completed: true, stage: 2},
    {text: 'Cepillarse los dientes', completed: false, stage: 0},
    {text: 'Usar estados derivados', completed: true, stage: 2}
  ];
  

function TodoProvider({children}){
  const [todos, setTodos] = React.useState(defaultTodos);
  const [openModal, setOpenModal] = React.useState(false);
  const toStartTodos = todos.filter(todo => todo.stage == 0).length;
  const inProgressTodos = todos.filter(todo => todo.stage == 1).length;;
  const completedTodos = todos.filter(todo => todo.stage == 2).length;
  const totalTodos = todos.length;
  const {filteredTodos, searchValue, setSearchValue} = 
  useSearch({dataSet: todos, keys: ["text"]});


  const moveTodoRight = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos[todoIndex].stage = newTodos[todoIndex].stage + 1;
    setTodos(newTodos);
  }
  const moveTodoLeft = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    newTodos[todoIndex].stage = newTodos[todoIndex].stage - 1;
    setTodos(newTodos);
  }
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
      completed: false,
      stage: 0
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
            focusNewTodoInput,
            moveTodoLeft,
            moveTodoRight,
            toStartTodos,
            inProgressTodos
        }}>
            {children}
        </TodoContext.Provider>
    );
}

export {TodoContext, TodoProvider}