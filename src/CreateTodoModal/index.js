import React from "react";
import { createPortal } from "react-dom";
import './CreateTodoModal.css';

function CreateTodoModal({children}){
    return createPortal(
        <div className="CreateTodoModalBackground">
            {children}
        </div>,
        document.getElementById('modal')
    );
}

export { CreateTodoModal };