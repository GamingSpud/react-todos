import './TodoSubList.css';
import { TodoSubListHeader } from './TodoSubListHeader';

const TodoSubList = (props) => {
  return (
    <>
      <ul className="TodoSubList column">
        <TodoSubListHeader text={props.todoSubListTitle} stage={props.stage}/>
        {props.children}
      </ul>
    </>
  );
};

export { TodoSubList };