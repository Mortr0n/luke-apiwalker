import React from 'react';


const Display = (props) => {

    const {displayList, setDisplayList} = props

    return(
        <div>
            
            {
                displayList.map((item, index) => {
                    return(
                        <div key={index}>
                            {item.name}
                        </div>
                    )
                    
                })
            }
        </div>
    )
}
export default Display;