import './TodoCounter.css';

function TodoCounter({completed, total}) {
    return (
      <h1 className="TodoCounter">
        Completaste <span>{completed}</span> de <span>{total}</span> TODOs
      </h1>
    );
  }

export { TodoCounter };