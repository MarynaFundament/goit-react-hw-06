import Contact from "../Contact/Contact"
import styles from "./contactList.module.css"
import PropTypes from 'prop-types';



const ContactList = ({contacts, onDelete}) => {

    return (
        <ul>
        { contacts.map((el) =>(

        <li key={el.id}>
        <Contact data = {el} onDelete = {onDelete}/>
        </li> 
         ))}

        </ul>
      
    )
}



export default ContactList;