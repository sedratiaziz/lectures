import React, { useState } from 'react'

export default function Counter() {
   const [count, setCount] = useState(0)

   const increaseCount = () => {
        setCount(count + 1)
   }
   
   const decreaseCount = ()=>{
    if (count <= 0) {
        useState(0)
    } else {
        setCount(count - 1)
    }     
   }
   
   const reset = ()=>{
        setCount(0)
   }


  return (
    <div>
        <h2>{count}</h2>
        <button onClick={increaseCount}>+</button>
        <button onClick={decreaseCount}>-</button>
        <button onClick={reset}>Reset</button>
    </div>
  )
}
