import './TodoLists.css';

const TodoLists = (todos) => {
  return (
    <ul className="TodoList row">
      {todos.children}
    </ul>
  );
};

export { TodoLists };