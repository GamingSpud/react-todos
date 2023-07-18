import logo from './platzi.webp';
import {TodoCounter} from './TodoCounter';
import {TodoSearch} from './TodoSearch';
import {TodoList} from './TodoList';
import {TodoItem} from './TodoItem';
import {CreateTodoButton} from './CreateTodoButton';
import React from 'react';

const defaultItem = [
  {text: 'Abrir los ojos', completed: true},
  {text: 'Respirar', completed: false},
  {text: 'Desayunar', completed: true},
  {text: 'Cepillarse los dientes', completed: false},
  {text: 'Usar estados derivados', completed: true}
];

/*localStorage.setItem('TODOS_v1', JSON.stringify(defaultTodos))
localStorage.removeItem('TODOS_v1') */

function useLocalStorage(itemName, defaultItem) {
  const localStorageItem = localStorage.getItem(itemName);
  let parsedItem;
  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify([defaultItem]))
    parsedItem = [];
  } else {
    parsedItem = JSON.parse(localStorageItem);
  }

  const [item, setItem] = React.useState(parsedItem);
  
  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  }

  return [item, saveItem];
}

function App() {
  
  const [todos, saveTodos] = useLocalStorage('TODOS_v1', defaultItem);
  const [searchValue, setSearchValue] = React.useState('');
  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;
  const filteredTodos = todos.filter((todo) => {
    const todoText = todo.text.toLocaleLowerCase();
    const filterText = searchValue.toLocaleLowerCase();
    return todoText.includes(filterText)
  });

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text == text
    );
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  }
  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text == text
    );
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  }

  return (
    <React.Fragment>
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <TodoList>
        {filteredTodos.map(todo => (
          <TodoItem 
          key={todo.text} 
          text={todo.text}
          completed={todo.completed}
          onComplete={() => completeTodo(todo.text)}
          onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;

/* Usar variables en vez de localStorage, agregar el modal de añadir TODOs, 
3 columnas por hacer, en progreso y terminados,, flechas para mover TODOs entre columnas
FUZZYFINDER, service locator*/