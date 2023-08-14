import { ColumnButton } from '../../../ColumnButton';
import './TodoSubListHeader.css';

function TodoSubListHeader(props) {
  return (
    <li className="SubListHeader">
      {ColumnButton(props)}
      <h2>{props.text}</h2>
    </li>
  );
};
  
 export { TodoSubListHeader };