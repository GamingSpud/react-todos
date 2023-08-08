import React from "react";
import './ColumnForm.css';
import { TodoContext } from '../TodoContext'

function ColumnForm () {
    const {
        setOpenColumnModal,
        createColumn,
        deleteColumn,
        swapColumn,
        focusNewTodoInput
    } = React.useContext(TodoContext);

    const onSubmit = (event) => {
        event.preventDefault();
    }
    const onCancel = (event) => {
        setOpenColumnModal(false);
    }

    return (
        <form onSubmit={onSubmit}>
            <label>Escribe el nuevo TODO</label>
            <textarea
                id="newTodoInput"
                placeholder="Escribir un TODO"
            />
            <div className="TodoForm-buttonContainer">
                <button
                    type="button"
                    className="TodoForm-button
                    TodoForm-button--cancel"
                    onClick={onCancel}
                >Cancelar</button>
                <button
                    type="submit"
                    className="TodoForm-button
                    TodoForm-button--add"
                >Añadir</button>
            </div>
        </form>
    )
}

export { ColumnForm };