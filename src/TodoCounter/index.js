import { TodoContext } from '../TodoContext';
import './TodoCounter.css';
import React from 'react';

function TodoCounter() {
  const {
    completedTodos,
    totalTodos
  } = React.useContext(TodoContext);
    return (
      <h1 className="TodoCounter">
        Completaste <span>{completedTodos}</span> de <span>{totalTodos}</span> TODOs
      </h1>
    );
  }

export { TodoCounter };