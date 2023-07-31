// import logo from '../platzi.webp';
import { TodoProvider } from '../TodoContext';
import { AppUI } from './AppUI';
import React from 'react';

function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;

/* Agregar el modal de añadir TODOs, 3 columnas por hacer, en progreso
y terminados,, flechas para mover TODOs entre columnas, service locator*/