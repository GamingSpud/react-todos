import './TodoSubList.css';

const TodoSubList = (todos) => {
  return (
    <ul className="TodoSubList column">
      {todos.children}
    </ul>
  );
};

export { TodoSubList };