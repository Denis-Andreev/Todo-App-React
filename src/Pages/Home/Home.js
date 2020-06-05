import React, {Fragment, useContext, useEffect} from "react";
import {Form} from "../../Components/Form";
import {Notes} from "../../Components/Notes";
import {FirebaseContext} from "../../Context/firebase/firebaseContext";
import {Loader} from "../../Components/Loader";

export const Home = () => {
    const {loading, notes, fetchNotes, removeNote} = useContext(FirebaseContext)

    useEffect(() => {
        // eslint-disable-next-line
        fetchNotes();
    }, [])

    return (
        <Fragment>
            <Form />

            {loading
                ? <Loader />
                : <Notes notes={notes} onRemove={removeNote} />
            }
        </Fragment>
    )
}