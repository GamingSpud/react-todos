import { ReactComponent as CheckSVG } from './check.svg';
import { ReactComponent as DeleteSVG } from './delete.svg';
import { FaChevronLeft } from 'react-icons/fa';
import { FaChevronRight } from 'react-icons/fa';
import { FaChevronDown } from 'react-icons/fa';
import { FaEdit } from 'react-icons/fa';
import { FaArrowRightArrowLeft } from 'react-icons/fa6'
import { FaTrashCan } from 'react-icons/fa6';
import { MdAddCircle } from 'react-icons/md';
import './TodoIcon.css';

const iconTypes = {
    "leftArrow": (color) => <FaChevronLeft className="Icon-svg-small" fill={color}/>,
    "leftArrow--inactive": (color) => <FaChevronLeft className="Icon-svg-small" fill={color}/>,
    "rightArrow": (color) => <FaChevronRight className="Icon-svg-small" fill={color}/>,
    "rightArrow--inactive": (color) => <FaChevronRight className="Icon-svg-small" fill={color}/>,
    "check": (color) => <CheckSVG className="Icon-svg" fill={color}/>,
    "delete": (color) => <DeleteSVG className="Icon-svg" fill={color}/>,
    "addCircle": (color) => <MdAddCircle className="Icon-svg-tiny" fill={color}/>,
    "trash": (color) => <FaTrashCan className="Icon-svg-small" fill={color}/>,
    "downArrow": (color) => <FaChevronDown className="Icon-svg-small" fill={color}/>,
    "swapArrow": (color) => <FaArrowRightArrowLeft className="Icon-svg-small" fill={color}/>,
    "edit": (color) => <FaEdit className="Icon-svg-small" fill={color} />
};

function TodoIcon({type, color, onClick}) {
    return (
        <span 
            className={`Icon-container Icon-container-${type}`}
            onClick={onClick}
        >
            {iconTypes[type](color)}
        </span>
    )
}

export { TodoIcon };