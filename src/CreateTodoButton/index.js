import React from 'react';
import { TodoContext } from '../TodoContext';
import { CreateTodoIcon } from '../TodoIcon/CreateTodoIcon';

function CreateTodoButton() {
  const {
    setOpenCreateModal
  } = React.useContext(TodoContext);
  return (
    <CreateTodoIcon
      setOpenCreateModal={setOpenCreateModal}
    />
  );
}

export { CreateTodoButton };