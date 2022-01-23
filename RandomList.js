import React, {useState} from 'react';




function RandomList() {
    
    const [number, setNewNumber] = useState([]);

    
        const addNumber = () => {

        setNewNumber(
            [...number, {
            id: number.length,
            value: Math.floor(Math.random() * 10 ) + 1
        }
    ])
       }
        
     

    return(
        <div>
         
 <button onClick={addNumber}> add a list item</button>

            <ul>
                {number.map(numbers => {
                    return <li key={numbers.id}>{numbers.value}</li>
                })}
            </ul>
        
       
        </div>
    )
}




export default RandomList
