import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoLists } from '../TodoLists';
import { TodoSubList } from '../TodoLists/TodoSubList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoContext } from '../TodoContext';
import { CreateTodoModal } from '../CreateTodoModal';
import { TodoForm } from '../TodoForm';
import React from 'react';

function AppUI() {
    const {
        columns,
        filteredTodos,
        completeTodo,
        deleteTodo,
        openCreateModal,
        setOpenCreateModal,
        moveTodoLeft,
        moveTodoRight,
        MAX_TODO_STAGE,
    } = React.useContext(TodoContext);

    return (
        <React.Fragment>
            <TodoCounter />
            <TodoSearch />
            <TodoLists className="row">
                {columns.map((v,i,a) => (
                    <TodoSubList className="column" key={i+v} stage={i.toString()} todoSubListTitle={v}>
                    {filteredTodos.filter(
                        (todo) => todo.stage === i
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
                ))}
            </TodoLists>
            <CreateTodoButton 
                setOpenCreateModal={setOpenCreateModal}
            />
            {openCreateModal && (
                <CreateTodoModal>
                    <TodoForm />
                </CreateTodoModal>
            )}
        </React.Fragment>
    );
}

export {AppUI};