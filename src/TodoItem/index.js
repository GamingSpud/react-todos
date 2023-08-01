//import {CompleteIcon} from '../TodoIcon/CompleteIcon'
import {LeftArrowIcon} from '../TodoIcon/LeftArrowIcon'
import {RightArrowIcon} from '../TodoIcon/RightArrowIcon'
import {DeleteIcon} from '../TodoIcon/DeleteIcon'
import { TodoContext } from '../TodoContext';
import React from 'react';
import './TodoItem.css';

function TodoItem(props) {
  const {
    moveTodoLeft,
    moveTodoRight
  } = React.useContext(TodoContext);
    return (
      <li className="TodoItem">
        <LeftArrowIcon stage={props.stage}
          moveTodoLeft={moveTodoLeft}
        />

        <RightArrowIcon stage={props.stage}
          moveTodoRight={moveTodoRight}
        />

        <p
          className={`TodoItem-p ${props
          .completed && "TodoItem-p--complete"}`}
        >{props.text}</p>
        
        <DeleteIcon onDelete={props.onDelete}/>
      </li>
    );
  }

export {TodoItem};