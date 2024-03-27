import Contact from "../Contact/Contact"
import styles from "../ContactList/contactList.module.css"

import { useSelector } from "react-redux"
import { selectContacts } from '../../redux/contactsSlice';
import { selectNameFilter } from "../../redux/filtersSlice" 

const ContactList = () => {

  const contacts = useSelector(selectContacts);
  const filterText = useSelector(selectNameFilter); 

  const filteredData = contacts.filter((el) => 
  el.name.toLowerCase().includes(filterText.toLowerCase()))
    
    return (
        <ul>
        { filteredData.map((el) =>(

        <li key={el.id}>
        <Contact data = {el}/>
        </li> 
         ))}

        </ul>
      
    )
}


export default ContactList;