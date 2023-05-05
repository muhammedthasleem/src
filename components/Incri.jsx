import { useState } from "react";
const Incri=()=>{
    let [data,setData]=useState(0)
    let a =()=>{setData(data++)}
    let b =()=>{ setData(data--)}
    return(
        <div>
            <h1>
                {data}
            </h1>
            <button onClick={a}>incriment</button>
            <button onClick={b}>decrement</button>

        </div>
    )
}
export default Incri