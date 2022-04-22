import { useState } from "react";

function Counter(){
    
    const [ counter , setCounter] = useState(0);
    const increase = (props) =>  {
        setCounter(counter + props )
    }
    const decrease = (props) =>  {
        setCounter(counter - props )
    }
    return (
        <div className="conter">
            <p>The value of the counter is {counter}</p>
            <button onClick={()=> increase(1)}>
                Increase By One
            </button>
            <button onClick={()=> increase(5)}>
                Increase By Five
            </button>
            <button onClick={()=> increase(10)}>
                Increase By Ten
            </button>
            <button onClick={()=> decrease(1)}>
                Decrease By One
            </button>
            <button onClick={()=> decrease(5)}>
                Decrease By Five
            </button>
            <button onClick={()=> decrease(10)}>
                Decrease By Ten
            </button>
        </div>
    )
}


export default Counter;