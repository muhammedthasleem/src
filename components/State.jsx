import { useState } from "react";
const State=()=>{
    let [data,setData]=useState("hungry")
    let a =()=>{setData("fulll")}
    return(
        <div>
            <h1>
                {data}
            </h1>
            <button onClick={a}>food</button>
        </div>
    )
}
export default State