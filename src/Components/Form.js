import React, {useState, useContext, Fragment} from "react";
import {AlertContext} from "../Context/alert/alertContext";
import {FirebaseContext} from "../Context/firebase/firebaseContext";

export const Form = () => {
    const [value, setValue] = useState('')
    const alert = useContext(AlertContext);
    const firebase = useContext(FirebaseContext);


    const submitHandler = (event) => {
        event.preventDefault();

        if(value.trim()) {
            firebase.addNote(value.trim())
                .then( () => {
                alert.show('Note added', 'success');
                })
                .catch( () => {
                alert.show('Unknown error', 'danger')
                })
            setValue('');
        } else {
            alert.show('Write your note');
        }
    }
    return (
        <form onSubmit={submitHandler}>
            <div className="form-group">
                <input type="text"
                       className="form-control"
                       placeholder="Write your note"
                       value={value}
                       onChange={e => setValue(e.target.value)}
                />
                <hr />
            </div>
        </form>
    )
}