import { LeftArrowIcon } from '../TodoIcon/LeftArrowIcon';
import { RightArrowIcon } from '../TodoIcon/RightArrowIcon';
import { DeleteIcon } from '../TodoIcon/DeleteIcon';
import React from 'react';
import './TodoItem.css';

function TodoItem(props) {
    return (
      <li className="TodoItem">
        <LeftArrowIcon stage={props.stage}
          moveTodoLeft={props.moveTodoLeft}
        />

        <p
          className="TodoItem-p"
          /* className={`TodoItem-p ${props
          .completed && "TodoItem-p--complete"}`} */
        >{props.text}</p>
        
        <RightArrowIcon stage={props.stage}
          moveTodoRight={props.moveTodoRight}
          MAX_TODO_STAGE={props.MAX_TODO_STAGE}
        />

        <DeleteIcon onDelete={props.onDelete}/>
      </li>
    );
  }

export { TodoItem };