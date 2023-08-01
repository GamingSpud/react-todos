import { FaChevronRight } from 'react-icons/fa';
import React from 'react';

const RightArrowIcon = (props) => {
    const {className, moveTodoRight} = props;
    return (
        <FaChevronRight 
            color="grey"
            className={className}
            onClick={moveTodoRight}
        />
    )
}

export {RightArrowIcon};