import { FaChevronLeft } from 'react-icons/fa';
import React from 'react';

const LeftArrowIcon = (props) => {
    const {className, moveTodoLeft} = props;
    return (
        <FaChevronLeft 
            color="grey"
            className={className}
            onClick={moveTodoLeft}
        />
    )
}

export {LeftArrowIcon};