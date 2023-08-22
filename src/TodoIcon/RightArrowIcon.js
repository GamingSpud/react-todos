import { TodoIcon } from './index';
import React from 'react';

const RightArrowIcon = ({moveTodoRight, stage, MAX_TODO_STAGE}) => {
    if (stage === MAX_TODO_STAGE) {
        console.log(MAX_TODO_STAGE);
        return(
            <TodoIcon
                type="rightArrow--inactive"
                color="lightgrey"
            />
        );
    } else {
        return (
            <TodoIcon
                type="rightArrow"
                color="grey"
                onClick={moveTodoRight}
                stage={stage}
            />
        );
    }
}

export {RightArrowIcon};