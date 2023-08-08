import React from 'react';
import { TodoContext } from '../TodoContext';
import { DownArrowIcon } from '../TodoIcon/DownArrowIcon';

function ColumnButton(props) {
  const {
    setOpenColumnModal
  } = React.useContext(TodoContext);
  /* return (
    <DownArrowIcon
        stage={props.stage}
        setOpenColumnModal={setOpenColumnModal}
    />
  ); */
}

export { ColumnButton };