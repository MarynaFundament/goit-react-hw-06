import { useState, useEffect  } from "react"
import { nanoid } from 'nanoid'

import ContactForm from "./ContactForm/ContactForm"
import SearchBox from "./SearchBox/SearchBox"
import ContactList from "./ContactList/ContactList"

import data from "./contactList.json"

const initialFormData = {
  name: "",
  number: "",
  id: nanoid()
 }


export const App = () => {

  const getInitialData = () => {
   const savedData = localStorage.getItem("contacts")
   return savedData ? JSON.parse(savedData) : [ ]

  }

    const [filterText, setFilter] = useState("");
    const [contacts, setContacts] = useState(getInitialData());
    
   

    const filteredData = contacts.filter((el) => 
    el.name.toLowerCase().includes(filterText.toLowerCase()))
    
    const handleAdd = (newContact) => { 
      setContacts ((prevContacts) => {
        return [...prevContacts, newContact ]
      })
    
    };

    const handleDelete = (contactId) => {
      setContacts((prevContacts) => {
        return prevContacts.filter (el => 
          el.id !== contactId)
      })
    
    }


    useEffect(() => {
      localStorage.setItem("contacts", JSON.stringify(contacts));
    }, [contacts]);

  
  return (
    <div>
      <h1>Phonebook</h1>

      <ContactForm  value = {initialFormData} onAdd = {handleAdd}/>
      <SearchBox value = {filterText} onChange = {setFilter}/>
      <ContactList contacts={filteredData} onDelete = {handleDelete} />

    </div>
  );
};




