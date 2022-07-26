 
import {FaRegCheckCircle, FaRegTimesCircle, FaRegQuestionCircle} from "react-icons/fa";


const Icon = ({name}) => {
    switch(name) {
        case "CHECKCIRCLE": 
        return <FaRegCheckCircle className="icons" />
        case "CROSSCIRCLE": 
        return <FaRegTimesCircle className="icons" />
        default: 
        return <FaRegQuestionCircle className="icons" />  // : 
    }

}

export default Icon;
