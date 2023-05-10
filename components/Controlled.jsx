import { useState } from "react"

const Controlled=()=>{
    let [name, setName]=useState("")
    let a=()=>{
        console.log(name)
    }
        let nameData=(e)=>{
            setName(e.target.value)
          
        }
        return(
            <div>
                <label >name</label>
                <input type="text" value={name} onChange={nameData} />
                <button onClick={a}>submit</button>

            </div>
        )
    }


export default Controlled