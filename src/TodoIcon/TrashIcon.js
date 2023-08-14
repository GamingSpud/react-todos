import {TodoIcon} from './index';

function TrashIcon (props) {
    return (
        <span>
            <div>
                {props.text}
            </div>
            <TodoIcon 
                type="trash"
                color="grey"
            />
        </span>
    );
}

export { TrashIcon };