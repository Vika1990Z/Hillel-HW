import React, { useState} from 'react';

import './styles.scss'

const Square = ({id}) => {
    const [ number, setNumber ] = useState(0);
    
    return (
        <div id={id} className="card d-flex">
            <button onClick={() => setNumber(number + 1)}>
                +
            </button>

            <p>{number}</p>

            <button onClick={() => setNumber(number - 1)}>
                -
            </button>
        </div>
    )
}

export default Square;

