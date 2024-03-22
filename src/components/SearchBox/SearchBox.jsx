import styles from "./searchBox.module.css"
import PropTypes from 'prop-types';


const SearchBox = ({value, onChange}) => {

    return (
        <div className={styles.element}>
        <p> Find contacts by name</p>

        <input className={styles.inp} type="text"
          placeholder="Input name or number here"
          value={value}
          onChange={(e) => onChange(e.target.value)} />
          

        </div>
        )}


export default SearchBox;