import React, {useState} from 'react';
import Form from '../components/Form';
import Display from '../components/Display';
// Going to get rid of.  Doing this differently
const Home = (props) => {
    const [displayList, setDisplayList] = useState([]);
    const [choice, setChoice] = useState([]);


    return(
        <div>
            <Form displayList={displayList} setDisplayList={setDisplayList}/>
            <Display displayList={displayList} setDisplayList={setDisplayList}/>
        </div>

    )
}
export default Home;