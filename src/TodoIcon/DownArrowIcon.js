import { TodoContext } from '../TodoContext';
import { TodoIcon } from './index';
import React from 'react';

function DownArrowIcon (props) {
  const {
    MAX_TODO_STAGE
  } = React.useContext(TodoContext);
    return (
      <TodoIcon 
            type="downArrow"
            color="grey"
            /* onClick={
              () => {
                setOpenModal(state => !state)
              }
            } */
          />
    );
}

export { DownArrowIcon };