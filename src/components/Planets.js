import React, {useEffect, useState} from 'react';
import axios from 'axios';


const Planets = (props) => {
    const {id} = props;
    const [planet, setPlanet] = useState({});
    const [inhabitantsArr, setInhabitantsArr] = useState([]);
    const [inhabitants, setInhabitants] = useState({});
    

    useEffect(() => {
        let tempInhabitantsArr = [];
        let newInhabitantsArr = [];
        axios.get(`https://swapi.dev/api/planets/${id}`)
        .then((res) => {
            console.log(res);
            console.log(res.data);
            console.log(res.data.residents);
            // tempInhabitantsArr =(res.data.residents);
            tempInhabitantsArr = res.data.residents;
            console.log(tempInhabitantsArr);
            setPlanet(res.data);
            tempInhabitantsArr.forEach(element => {
                axios.get(`${element}`)
                .then((inhabitantRes) => {
                    // console.log(inhabitantRes.data);
                    newInhabitantsArr.push(inhabitantRes.data);
                    setInhabitantsArr(newInhabitantsArr);
                    console.log(inhabitantsArr);
                })
                .catch((err)=>console.log(err));
            });

            // for(let i = 1; i<=tempInhabitantsArr.length; i++){
            //     axios.get(`https://swapi.dev/api/people/${[i]}`)
            //     .then((inhabitantRes) => {
            //         console.log(inhabitantRes.data + " hi");
            //         newInhabitantsArr.push(inhabitantRes.data);
            //         setInhabitantsArr(newInhabitantsArr);
            //     })
            //     // setInhabitantsArr(newInhabitantsArr);
            //     .catch((err)=> console.log(err));
            // }
            
        })
        .catch((err)=>console.log(err));
    }, [id])


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
                    <p>
                    
                    </p>
                </div>
            }
            {
                
                inhabitantsArr.map((inhabitant, index) => {
                    return(
                        <div key={index}>
                            {inhabitant.name}
                            {inhabitant.height}
                            
                            {console.log(inhabitant.name)}
                            {console.log(inhabitant.height)}
                        </div>
                        )
                    })
                }
        </div>
    )
}
export default Planets;