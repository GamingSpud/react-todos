import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoLists } from '../TodoLists';
import { TodoSubList } from '../TodoLists/TodoSubList';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoContext } from '../TodoContext';
import { CreateTodoModal } from '../CreateTodoModal';
import { TodoForm } from '../TodoForm';
import { ColumnForm } from '../ColumnForm';
import { ColumnModal } from '../ColumnModal';
import React from 'react';

function AppUI() {
    const {
        filteredTodos,
        completeTodo,
        deleteTodo,
        openCreateModal,
        setOpenCreateModal,
        openColumnModal,
        setOpenColumnModal,
        moveTodoLeft,
        moveTodoRight,
        MAX_TODO_STAGE,
        todoSubListTitle
    } = React.useContext(TodoContext);

    return (
        <React.Fragment>
            <TodoCounter />
            <TodoSearch />
            <TodoLists className="row">
                <TodoSubList className="column" stage="0" todoSubListTitle={todoSubListTitle[0]}>
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
                    {openColumnModal && (
                        <ColumnModal>
                            <ColumnForm />
                        </ColumnModal>
                    )}
                </TodoSubList>
                <TodoSubList className="column" stage="1" todoSubListTitle={todoSubListTitle[1]}>
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
                    {openColumnModal && (
                        <ColumnModal>
                            <ColumnForm />
                        </ColumnModal>
                    )}
                </TodoSubList>
                <TodoSubList className="column" stage="2" todoSubListTitle={todoSubListTitle[2]}>
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
                    {openColumnModal && (
                        <ColumnModal>
                            <ColumnForm />
                        </ColumnModal>
                    )}
                </TodoSubList>
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