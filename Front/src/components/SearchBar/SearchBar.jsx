import {useState} from "react"
import styles from "./SearchBar.module.css";

export default function SearchBar(props) {
   const [character, setCharacter] = useState("");
   const handleInput= event => {
      const {value} = event.target;
      
      setCharacter(value);
   }

   return (
      <div className={styles.container}>
         <input onChange={(event)=> handleInput(event)}
         type='search'
         name= 'search'
         id= 'search'
         />
      
      <button onClick={() => props.onSearch(character)}>Agregar</button>
      </div>
   );
}
