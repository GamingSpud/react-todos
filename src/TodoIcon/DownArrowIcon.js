import { TodoContext } from '../TodoContext';
import { TodoIcon } from './index';
import { EditIcon } from './EditIcon';
import { SwapArrowIcon } from './SwapArrowIcon';
import { TrashIcon } from './TrashIcon';
import React from 'react';

function DownArrowIcon (props) {
  const {
    // MAX_TODO_STAGE,
    newColumn,
    deleteColumn,
  } = React.useContext(TodoContext);
  const [openColumnModal, setOpenColumnModal] = React.useState(false);

    return (
      <div className="column-dropdown">
        <TodoIcon 
          type="downArrow"
          color="grey"
          props={props}
          stage={props.stage}
          active={openColumnModal}
          onClick={
            () => {
              setOpenColumnModal(state => !state)
            }
          }
        />
        {openColumnModal ? (
          <ul className="column-menu">

            <li className="column-menu-item" onClick={() => {
              newColumn(props.stage)
            }}>
              <span>
                <div>
                    Añadir Columna
                </div>
                <TodoIcon 
                    type="addCircle2"
                    color="grey"
                />
              </span>
            </li>
            <li className="column-menu-item">
              <EditIcon text="Editar Título" />
            </li>
            <li className="column-menu-item">
              <SwapArrowIcon text="Intercambiar Columnas"/>
            </li>
            <li className="column-menu-item" onClick={() => {
              deleteColumn(props.stage)
            }}>
              <TrashIcon text="Eliminar Columna"/>
            </li>
          </ul>
        ) : null }
      </div>
    );
}

export { DownArrowIcon };