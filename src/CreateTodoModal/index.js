import './CreateTodoModal.css';
import { ReactDOM } from 'react';

function CreateTodoModal({children}){
    return ReactDOM.createPortal(
        <div className="ModalBackground">
            {children}
        </div>,
        document.getElementById('modal')
    )
}

export {CreateTodoModal};