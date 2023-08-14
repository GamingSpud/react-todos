import {TodoIcon} from './index';

function SwapArrowIcon (props) {
    return (
        <span>
            <div>
                {props.text}
            </div>
            <TodoIcon 
                type="swapArrow"
                color="grey"
            />
        </span>
    );
}

export { SwapArrowIcon };