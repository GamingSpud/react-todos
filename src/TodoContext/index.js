import React from "react";
import {useSearch} from "../useSearch";

const TodoContext = React.createContext()

const defaultTodos = [
    {text: 'Abrir los ojos', stage: 1},
    {text: 'Respirar', stage: 1},
    {text: 'Desayunar', stage: 0},
    {text: 'Cepillarse los dientes', stage: 0},
    {text: 'Usar estados derivados', stage: 2},
    {text: 'Subir TODOS a un Repositorio GIT público', stage: 2}
];


function TodoProvider({children}){
  let MAX_TODO_STAGE = 2;
  const [todos, setTodos] = React.useState(defaultTodos);
  const [openCreateModal, setOpenCreateModal] = React.useState(false);
  const toStartTodos = todos.filter(todo => todo.stage == 0).length;
  const inProgressTodos = todos.filter(todo => todo.stage == 1).length;;
  const completedTodos = todos.filter(todo => todo.stage == MAX_TODO_STAGE).length;
  const totalTodos = todos.length;
  const {filteredTodos, searchValue, setSearchValue} = 
  useSearch({dataSet: todos, keys: ["text"]});
  const todoSubListTitle = {
    2: 'Terminados',
    1: 'En Progreso',
    0: 'Por hacer',
  };
  
  const moveTodoRight = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    if (newTodos[todoIndex].stage < MAX_TODO_STAGE) {
      newTodos[todoIndex].stage += 1;
      setTodos(newTodos);
    }
  }
  const moveTodoLeft = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text === text
    );
    if (newTodos[todoIndex].stage > 0) {
      newTodos[todoIndex].stage -= 1;
      setTodos(newTodos);
    }
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
            deleteTodo,
            openCreateModal,
            setOpenCreateModal,
            focusNewTodoInput,
            moveTodoLeft,
            moveTodoRight,
            toStartTodos,
            inProgressTodos,
            MAX_TODO_STAGE,
            todoSubListTitle
        }}>
            {children}
        </TodoContext.Provider>
    );
}

export {TodoContext, TodoProvider}