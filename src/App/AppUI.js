import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoLists } from '../TodoLists';
import { TodoSubList } from '../TodoLists/TodoSubList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoContext } from '../TodoContext';
import { Modal } from '../Modal';
import { TodoForm } from '../TodoForm';
import React from 'react';

function AppUI() {
    const {
        filteredTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal,
        moveTodoLeft,
        moveTodoRight,
        MAX_TODO_STAGE
    } = React.useContext(TodoContext);

    return (
        <React.Fragment>
            <TodoCounter />
            <TodoSearch />
            <TodoLists className="row">
                <TodoSubList className="column" key="0">
                    <h2 style={{textAlign:'center'}}>Por Hacer</h2>
                    {filteredTodos.filter(
                        (todo) => todo.stage == 0
                    ).map(todo => (
                        <TodoItem 
                            key={todo.text} 
                            text={todo.text}
                            stage={todo.stage}
                            completed={todo.completed}
                            MAX_TODO_STAGE={MAX_TODO_STAGE}
                            moveTodoLeft={() => moveTodoLeft(todo.text)}
                            moveTodoRight={() => moveTodoRight(todo.text)}
                            onComplete={() => completeTodo(todo.text)}
                            onDelete={() => deleteTodo(todo.text)}
                        />
                    ))}
                </TodoSubList>
                <TodoSubList className="column" key="1">
                    <h2 style={{textAlign:'center'}}>En Progreso</h2>
                    {filteredTodos.filter(
                        (todo) => todo.stage == 1
                    ).map(todo => (
                        <TodoItem 
                            key={todo.text} 
                            text={todo.text}
                            stage={todo.stage}
                            completed={todo.completed}
                            MAX_TODO_STAGE={MAX_TODO_STAGE}
                            moveTodoLeft={() => moveTodoLeft(todo.text)}
                            moveTodoRight={() => moveTodoRight(todo.text)}
                            onComplete={() => completeTodo(todo.text)}
                            onDelete={() => deleteTodo(todo.text)}
                        />
                    ))}
                </TodoSubList>
                <TodoSubList className="column" key="2">
                    <h2 style={{textAlign:'center'}}>Terminados</h2>
                    {filteredTodos.filter(
                        (todo) => todo.stage == 2
                    ).map(todo => (
                        <TodoItem 
                            key={todo.text} 
                            text={todo.text}
                            stage={todo.stage}
                            completed={todo.completed}
                            MAX_TODO_STAGE={MAX_TODO_STAGE}
                            moveTodoLeft={() => moveTodoLeft(todo.text)}
                            moveTodoRight={() => moveTodoRight(todo.text)}
                            onComplete={() => completeTodo(todo.text)}
                            onDelete={() => deleteTodo(todo.text)}
                        />
                    ))}
                </TodoSubList>
            </TodoLists>
            <CreateTodoButton 
                setOpenModal={setOpenModal}
            />
            {openModal && (
                <Modal>
                    <TodoForm />
                </Modal>
            )}
        </React.Fragment>
    );
}

export {AppUI};