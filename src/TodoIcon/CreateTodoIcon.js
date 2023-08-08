import { TodoIcon } from './index';

const CreateTodoIcon = ({setOpenCreateModal}) => {
    return (
        <TodoIcon
            type="addCircle"
            color="#61dafa"
            onClick={
              () => {
                setOpenCreateModal(state => !state)
              }
            }
        /> 
    );
}

export { CreateTodoIcon };