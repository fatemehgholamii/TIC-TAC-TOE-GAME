import React from "react";
import  { FaPen , FaTimes , FaRegCircle} from "react-icons/fa" ;

const Icon =({name}) =>{

   switch (name) {
        case "cross": 
            return <FaRegCircle className="icons"/>
        case "circle":
           return <FaTimes  className="icons"/>
    
        default:
          return <FaPen className="icons"/>
   }
};

export default Icon;
