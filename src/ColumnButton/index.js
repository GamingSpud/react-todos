import React from 'react';
import { DownArrowIcon } from '../TodoIcon/DownArrowIcon';

function ColumnButton(props) {
  return (
    <DownArrowIcon 
      stage={props.stage}
    />
  );
}

export { ColumnButton };