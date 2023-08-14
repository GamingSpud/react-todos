import { TodoIcon } from './index';
import React from 'react';

const LeftArrowIcon = ({moveTodoLeft, stage}) => {
    if (stage == 0) {
        return(
            <TodoIcon
                type="leftArrow--inactive"
                color="lightgrey"
            />
        );
    } else {
        return (
            <TodoIcon 
                type="leftArrow"
                color="grey"
                onClick={moveTodoLeft}
                stage={stage}
            />
        );
    }
}

export {LeftArrowIcon};