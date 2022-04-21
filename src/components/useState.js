import React, { useState } from 'react';
import { UseCounter } from '../hooks/useCounter';





const UseStateHook = () => {

  const {count, handleDecrement, handleIncrement, handleReset } = UseCounter(20, 5)



    return (
        <>
            <div style={{ display: 'flex' }}>
                <button onClick={handleDecrement}>-</button>
                <h1>{count}</h1>
                <button onClick={handleIncrement}>+</button>
            </div>

            {/* <div>
                <button onClick={() => setShowText(!showText)}>click</button>
               
                {
                    showText &&
                    <h1>Cambiamos el estado</h1> 
                }

            </div> */}
        </>
    )
}

export default UseStateHook;