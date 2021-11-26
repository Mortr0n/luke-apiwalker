import React, {useEffect, useState} from 'react';
import axios from 'axios';


const Planets = (props) => {
    const {id} = props;
    const [planet, setPlanet] = useState({});

    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${id}`)
        .then((res) => {
            console.log(res);
            console.log(res.data);
            setPlanet(res.data);
        })
        .catch((err)=>console.log(err));
    })

    return(
        <div>
            {
                planet &&
                <div>
                    <h1>{planet.name}</h1>
                    <p>Climate : {planet.climate}</p>
                    <p>Diameter : {planet.diameter}</p>
                    <p>Orbital Period : {planet.orbital_period}</p>
                    <p>Population : {planet.population}</p>

                </div>
            }
        </div>
    )
}
export default Planets;