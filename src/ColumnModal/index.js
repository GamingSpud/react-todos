import React from "react";
import { createPortal } from "react-dom";
import './ColumnModal.css';

function ColumnModal({children}){
    return createPortal(
        <div className="ColumnModalBackground">
            {children}
        </div>,
        document.getElementById('modal')
    );
}

export { ColumnModal };