import { useState } from "react"
import "./Button.css"

export const Button = () => {
    const [count, setCount] = useState(0)

    const handleIncrement = () => {
        setCount(count + 1)
    }

    const handleDecrement = () => {
        if (count === 0) {
            setCount(count)
        } else {
            setCount( count -1)
        }
    }
   

  return (
    <div className="flex-container"> 
        <button onClick={handleIncrement}>
            +
        </button>

        <p>{count}</p>

        <button onClick={handleDecrement}>
            -
        </button>
        
    </div>
  )
}