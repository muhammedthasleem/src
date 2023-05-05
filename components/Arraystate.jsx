import { useState } from "react";
const Arraystate=()=>{
    let [data,setData]=useState({name:"thas",id:374,loc:"gjhe"})
    return(
        <div>
            <h1>
                {data.name}
            
            </h1>
            <h2>{data.id}</h2>
        </div>
    )
}
export default Arraystate