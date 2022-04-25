import React, { useState } from 'react';
import './counter.css';

function Counter() {
    const [count, setCount] = useState(0);
    return (
        <button className='boton' onClick={ () => setCount(count+1) }>
            {count} veces clickeado
        </button>
    );
}

export default Counter;