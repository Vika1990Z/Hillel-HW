import React, { useState} from 'react';
import Button from './Button'

import './styles.scss'

const Square = ({id}) => {
    const [ number, setNumber ] = useState(0);
    
    return (
        <div id={id} className="card d-flex">
            <Button onClick = {() => setNumber(number + 1)}>
                +
            </Button>

            <p>{number}</p>
            
            <Button onClick = {() => setNumber(number - 1)}>
                -
            </Button>
        </div>
    )
}

export default Square;

