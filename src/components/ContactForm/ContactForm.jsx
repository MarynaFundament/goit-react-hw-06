
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from 'yup';
import { nanoid } from 'nanoid'

import styles from "./form.module.css"
import PropTypes from 'prop-types';

import { useDispatch } from "react-redux"
import { addContact } from "../redux/contactsSlice"


const UserSchema = Yup.object().shape({
    name: Yup.string()
    .min(3, "Too short!")
    .max(50, "Too long!")
    .required("Name is required"), 

    number: Yup.string()
    .min(3, "Too short!")
    .max(50, "Too long!")
    .required("Number id required"), 
})


const ContactForm = ({ value }) => {
    const dispatch = useDispatch()

const handleSubmit = (e, { resetForm }) => {

    const newContact = {
        name: e.name, 
        number: e.number, 
        id: nanoid()}

    dispatch(addContact(newContact));

    resetForm()
}

    return (
        <Formik 
        initialValues = {value}
        validationSchema = {UserSchema}
        onSubmit = {handleSubmit} >

           <Form> 
            <div className={styles.element}>
                <label htmlFor="name"> Name </label>
                <Field className={styles.field} type="text" name="name"></Field>
                <ErrorMessage name="name"/>
               
            </div>

            <div className={styles.element}>
                <label htmlFor="number"> Number </label>
                <Field className={styles.field} type="text" name="number"></Field> 
                <ErrorMessage name="number"/>

            </div>
                 
            <button type="submit"> Add contact </button>
            </Form>
        </Formik>
    )
}

ContactForm.propTypes = {
    value: PropTypes.object.isRequired,
  };

export default ContactForm