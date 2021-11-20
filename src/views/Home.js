import React, {useState} from 'react';
import Form from '../components/Form';
import Display from '../components/Display';

const Home = (props) => {
    const [displayList, setDisplayList] = useState([]);


    return(
        <div>
            <Form displayList={displayList} setDisplayList={setDisplayList}/>
            <Display displayList={displayList} setDisplayList={setDisplayList}/>
        </div>

    )
}
export default Home;