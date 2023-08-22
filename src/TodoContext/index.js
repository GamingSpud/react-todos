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

const columns = [
  'Por Hacer',
  'En Progreso',
  'Terminados'
]

let MAX_TODO_STAGE = 2;

function TodoProvider({children}){
  const [todos, setTodos] = React.useState(defaultTodos);
  const [openCreateModal, setOpenCreateModal] = React.useState(false);
  const completedTodos = todos.filter(todo => todo.stage === MAX_TODO_STAGE).length;
  const totalTodos = todos.length;
  const {filteredTodos, searchValue, setSearchValue} = 
  useSearch({dataSet: todos, keys: ["text"]});
  
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
  const newColumn = (int) => {
    const newTodos = [...todos];
    newTodos.filter((todo) => todo.stage >= int).forEach((todo) => todo.stage += 1);
    setTodos(newTodos);
    columns.splice(int, 0, "aba");
    MAX_TODO_STAGE += 1;
  }
  const deleteColumn = (int) => {
    columns.splice(int, 1);
    let newTodos = [...todos];
    newTodos = newTodos.filter((todo) => todo.stage != int);
    newTodos.forEach((todo) => {
      if (todo.stage > int) {
        todo.stage -= 1
      }
    });
    setTodos(newTodos);
    MAX_TODO_STAGE -= 1;
  }
  const swapColumn = (int) => {
    const newTodos = [...todos];
    newTodos.filter((todo) => todo.stage >= int).forEach((todo) => todo.stage += 1);
    setTodos(newTodos);
    if (int < MAX_TODO_STAGE) {
      const bubble = columns[int];
      columns[int] = columns[int+1];
      columns[int+1] = bubble;
    } else {
      const bubble = columns[int-1];
      columns[int-1] = columns[int];
      columns[int] = bubble;
    }
    MAX_TODO_STAGE += 1;
  }

    return (
        <TodoContext.Provider value={{
            columns,
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
            MAX_TODO_STAGE,
            newColumn,
            deleteColumn,
          }}>
            {children}
        </TodoContext.Provider>
    );
}

export {TodoContext, TodoProvider}