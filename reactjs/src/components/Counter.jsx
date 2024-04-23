import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';

const Counter = ()=>{
    const [count,setCounter] = useState(0);
    const decrement = ()=>{
        if(count===0)
        {
            const btn = document.getElementById('decrement');
            btn.disabled = true;
        }
        else
            setCounter(count-1)
    }

    const increment = ()=>{
        setCounter(count+1); 
        if(count===0)
        {
            const btn = document.getElementById('decrement');
            btn.disabled = false;
        }
    }

    return(
    <>
        <h1 className="badge text-bg-secondary m-3 p-3">{count}</h1><br></br>
        <button onClick={increment} type="button" className="btn btn-info m-2">Increment</button>
        <button  id="decrement" onClick={decrement} type="button" className="btn btn-info">Decrement</button>
    </>
    )
}


export default Counter;