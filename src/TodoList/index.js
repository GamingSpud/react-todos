import './TodoList.css';

const TodoList = (todos) => {
  return (
    <ul className="TodoList">
      {todos.children}
    </ul>
  );
};

export { TodoList };