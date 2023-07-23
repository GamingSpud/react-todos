import './TodoList.css';
import { useSearch } from '../useSearch';

const TodoList = (posts) => {
  const {filteredTodos, searchValue, setSearchValue} = 
  useSearch({dataSet: posts, keys: ['text', 'completed']});
  return (
    <ul className="TodoList"
      /* filteredTodos={filteredTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue} */
    >
      {posts.children}
    </ul>
  );
};

/* function TodoList(props) {
    return (
      <ul className="TodoList">
        {props.children}
      </ul>
    );
  } */

export { TodoList };