import React, { useEffect, useState } from 'react';
import { Link } from '@reach/router';
import axios from 'axios';


const People = (props) => {

    const {id} = props;
    const [displayItem, setDisplayItem] = useState({});
    const [homeworld, setHomeworld] = useState("");
    const [homeworldID, setHomeworldID] = useState();

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${id}`)
        .then((res) => {
            console.log(res);
            console.log(res.data);
            setDisplayItem(res.data);
            // see function below for getting homeworldID
            getHomeWorldID(res.data.homeworld);
            // get the homeworld to display
            axios.get(res.data.homeworld)
                .then((homeworldRes) => {
                    console.log(homeworldRes.data.name);
                    setHomeworld(homeworldRes.data.name);
                })
                .catch((err) => console.log(err));

        })
        .catch((err) => console.log(err));
    }, [id])

    // check if the planet is a one or 2 number planet id and set the ID accordingly
    const getHomeWorldID = (homeWorldURL) => {
        if(homeWorldURL.charAt(homeWorldURL.length-3)=== "/"){
            const hwID = homeWorldURL.charAt(homeWorldURL.length-2);
            setHomeworldID(hwID);
        }else {
            const firstChar = homeWorldURL.charAt(homeWorldURL.length-3);
            const secondChar = homeWorldURL.charAt(homeWorldURL.length-2);
            const homeWorldIDString = `${firstChar}${secondChar}`;
            setHomeworldID(homeWorldIDString);
            console.log(homeworldID);
        }
        
    }

    return(
        <div>
            {
                displayItem &&
                <div>
                
                <h1>{displayItem.name}</h1>
                <p>Year of Birth : {displayItem.birth_year}</p>
                <p>Eye Color : {displayItem.eye_color}</p>
                <p>Hair Color : {displayItem.hair_color}</p>
                <p>Height : {displayItem.height}</p>
                {/* link to the homeworld if clicked */}
                <p>
                    <Link to={`/planets/${homeworldID}`}>{homeworld}</Link>
                </p>
                
                </div>
                
            }
        </div>
    )
}
export default People;