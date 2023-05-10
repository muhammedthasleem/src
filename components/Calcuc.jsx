import { useState } from "react"

const Calcuc=()=>{
    let [num1, setNum1]=useState("")
    let [num2, setNum2]=useState("")
    let [res,setRes]=useState(0)

    let a=()=>{
        setRes(parseInt(num1)+parseInt(num2))
    }
    let b=()=>{
        setRes(num1-num2)
    }
    let c=()=>{
        setRes(num1*num2)
    }
    let d=()=>{
        setRes(num1/num2)
    }
        let num1Data=(e)=>{
            setNum1(e.target.value)
          
        }
        let num2Data=(e)=>{
            setNum2(e.target.value)
          
        }
        return(
            <div>
                <label >enter the first number</label>
                <input type="number" value={num1} onChange={num1Data} />
                <label >enter the first number</label>
                <input type="" value={num2} onChange={num2Data} />
                <button  onClick={a}>+</button>
         <button onClick={b}>-</button>
        <button  onClick={c}>*</button>
        <button  onClick={d}>/</button>
        <h1>{res}</h1>

            </div>
        )
    }


export default Calcuc