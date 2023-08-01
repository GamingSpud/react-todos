import React from "react";
import './TodoForm.css';
import { TodoContext } from '../TodoContext'

function TodoForm () {
    const [newTodoText, setNewTodoText] = React.useState('');
    const {
        setOpenModal,
        createTodo,
        focusNewTodoInput
    } = React.useContext(TodoContext);
    const onSubmit = (event) => {
        event.preventDefault();
        if (!!newTodoText) {
            createTodo(newTodoText);
        }
        setOpenModal(false);
    }
    const onCancel = (event) => {
        setOpenModal(false);
    }
    const onChange = (event) => {
        setNewTodoText(event.target.value);
    }

    return (
        <form onSubmit={onSubmit}>
            <label>Escribe el nuevo TODO</label>
            <textarea
                id="newTodoInput"
                value={newTodoText}
                onChange={onChange}
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

export { TodoForm };