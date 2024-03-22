import { FaPhoneAlt } from "react-icons/fa";
import { GrUserManager } from "react-icons/gr";


import styles from "./contact.module.css"
import PropTypes from 'prop-types';


const Contact = ({data : {id, name, number}, onDelete}) => {

  return (
        <div className={styles.element}>
        <div >
          <div className={styles.icon}>
          <GrUserManager/>
          <p>{name}</p>
          </div>
       
         <div className={styles.icon}>
          <FaPhoneAlt />
           <p>{number}</p>
         </div>
        
        </div>

        <button onClick={() => onDelete(id)}> Delete </button>

        </div>
        
    )
}

Contact.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
  }),
  onDelete: PropTypes.func.isRequired,
};

export default Contact; 