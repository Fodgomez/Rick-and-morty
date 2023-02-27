import styles from "./From.module.css";
import {useState} from "react"

export default function Form(props){

    
    }
        

    return(
    <div className={styles.container}>
        <form>
            <label>Username</label>
            <input
                type="text"
                name= "username"
                value= {userData.username}
                onChange={}
            />
            
        <br/>
            <label>Password</label>
            <input
                type="passwoerd"
                name= "password"
                value= {userData.username}

            />
            <hr/>
            <button>Login</button>
        </form>
    </div>
    )
