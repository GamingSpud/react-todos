import {TodoCounter} from '../TodoCounter';
import {TodoSearch} from '../TodoSearch';
import {TodoList} from '../TodoList';
import {TodoItem} from '../TodoItem';
import {CreateTodoButton} from '../CreateTodoButton';
import {CreateTodoModal} from '../CreateTodoModal';
import React from 'react';

function AppUI({
    completedTodos,
    totalTodos,
    todos,
    searchValue,
    setSearchValue,
    filteredTodos,
    completeTodo,
    deleteTodo
}) {
    return (
        <React.Fragment>
        <TodoCounter completed={completedTodos} total={totalTodos} />
        <TodoList posts={todos}>
            <TodoSearch 
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            />
            {filteredTodos.map(todo => (
            <TodoItem 
            key={todo.text} 
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
            />
            ))}
        </TodoList>
        <CreateTodoButton 
            // setOpenModal={setOpenModal}
        />
        {/* {openModal && (
            <Modal>
            <CreateTodoModal></CreateTodoModal>
            </Modal>
        )} */}
        </React.Fragment>
    );
}

export {AppUI};