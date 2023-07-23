import {TodoIcon} from './index';

function CompleteIcon ({completed, onComplete}) {
    return (
        <TodoIcon 
            type="check"
            color={completed ? "lightgreen" : "grey"}
            onClick={onComplete}
        />
    );
}

export {CompleteIcon};