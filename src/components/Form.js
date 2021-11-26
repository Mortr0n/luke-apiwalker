import React, {useState} from 'react';
import { navigate } from '@reach/router';

const Form = (props) => {
    const [searchSelector, setSearchSelector] = useState("");
    const [idSelector, setIDSelector] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        navigate(`/${searchSelector}/${idSelector}`);

            
    };

    

    return(
        <form onSubmit={submitHandler}>
            <label htmlFor="searchSelector">Search for:</label>
            <select onChange={(e) => setSearchSelector(e.target.value)}>
                <option value="" defaultValue>Select an option</option>
                <option value="people">People</option>
                <option value="planets">Planets</option>
                <option value="films">Films</option>
                <option value="species">Species</option>
                <option value="vehicles">Vehicles</option>
                <option value="starships">Starships</option>
            </select>
            <label htmlFor="idSelector">ID:</label>
            <input type="text" onChange={(e)=>setIDSelector(e.target.value)} />

            <button>Choose</button>
        </form>

        
    )

}

export default Form;