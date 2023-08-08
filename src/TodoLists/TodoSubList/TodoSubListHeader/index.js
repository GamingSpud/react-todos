import { ColumnButton } from '../../../ColumnButton';
import { DownArrowIcon } from '../../../TodoIcon/DownArrowIcon';
import './TodoSubListHeader.css';

function TodoSubListHeader(props) {
  return (
    <li className="SubListHeader">
      {ColumnButton(props)}
      {/* <DownArrowIcon stage={props.stage}/> */}
      <h2>{props.text}</h2>
    </li>
  );
};
  
 export { TodoSubListHeader };