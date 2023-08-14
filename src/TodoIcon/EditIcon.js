import {TodoIcon} from './index';

function EditIcon (props) {
    return (
        <span>
            <div>
                {props.text}
            </div>
            <TodoIcon 
                type="edit"
                color="grey"
            />
        </span>
    );
}

export { EditIcon };