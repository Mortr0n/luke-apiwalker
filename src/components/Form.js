import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Form = (props) => {
    const [choiceList, setChoiceList] = useState([]);
    const [searchSelector, setSearchSelector] = useState("");
    const {displayList, setDisplayList} = props;

    const submitHandler = (e) => {
        e.preventDefault();
        axios.get(`${searchSelector}`)
            .then((res) => {
                console.log(res);
                console.log(res.data.results);
                setDisplayList(res.data.results);
            })
            .catch((err) => console.log(err))
    }

    useEffect(() => {
        axios.get('https://swapi.dev/api/')
        .then((res) => {
            console.log(res);
            console.log(res.data);
            var choiceAsArray = []
            Object.keys(res.data).forEach(key=>choiceAsArray.push(res.data[key]))
            console.log(choiceAsArray)
            setChoiceList(choiceAsArray);
        })
        .catch((err) => console.log(err))
    }, []);

    return(
        <form onSubmit={submitHandler}>
            <label htmlFor="searchSelector">Search for:</label>
            <select onChange={(e) => setSearchSelector(e.target.value)}>
                {
                    choiceList.map((choice, index) => {
                        return(
                            <option value={choice} name="searchSelector" key={index}>{choice}</option>
                    )
                })
                }
            </select>
            <button>Choose</button>
        </form>

        
    )

}

export default Form;