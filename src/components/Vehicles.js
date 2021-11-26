import React, {useEffect, useState} from 'react';
import axios from 'axios';

const Vehicles = (props) => {
    const {id} = props;
    const [vehicle, setVehicle] = useState("");

    useEffect(() => {
        axios.get(`https://swapi.dev/api/vehicles/${id}`)
            .then((res) => {
                console.log(res);
                console.log(res.data);
                setVehicle(res.data);
            })
            .catch((err) => console.log(err));
    }, [])

    return(
        <div>
            <h1>{vehicle.name}</h1>
            <p>Crew : {vehicle.crew}</p>
            <p>Passengers : {vehicle.passengers}</p>
            <p>Cargo Capacity : {vehicle.cargo_capacity}</p>
            <p>Model : {vehicle.model}</p>
        </div>
    )
}
export default Vehicles;