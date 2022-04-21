import { useState } from "react"

export const UseCounter = (initialState, num) => {

    const [count, setCount] = useState(initialState);

    const handleIncrement = () => {
        setCount(count+num);
    }

    const handleDecrement = () => {
        setCount(count-num);
    }

    const handleReset = () => {
        setCount(initialState)
    }


    return {count, handleDecrement, handleIncrement, handleReset}

}