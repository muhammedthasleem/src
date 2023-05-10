import { useRef, useState } from "react"

const Calc=()=>{
    let num1Ref=useRef()
    let num2Ref=useRef()
    let [res ,setRes]=useState(0)
    let a=(e)=>{
        e.preventDefault()
        let data1=num1Ref.current.value
        let data2=num2Ref.current.value
        setRes(parseInt(data1)+parseInt(data2))

    }
    let b=(e)=>{
        e.preventDefault()

        let data1=num1Ref.current.value
        let data2=num2Ref.current.value
        setRes(data1-data2)
    }
    let c=(e)=>{
        e.preventDefault()

        let data1=num1Ref.current.value
        let data2=num2Ref.current.value
        setRes(data1*data2)
    }
    let d=(e)=>{
        e.preventDefault()

        let data1=num1Ref.current.value
        let data2=num2Ref.current.value
        setRes(data1/data2)
    }


    return (
        <div>
            <form action="">
            <label>enter the first number</label>
            <input type="number" ref={num1Ref} />
            <label >enter the second number</label>
            <input type="number" ref={num2Ref}/>

        <button  onClick={a}>+</button>
         <button onClick={b}>-</button>
        <button  onClick={c}>*</button>
        <button  onClick={d}>/</button>
        <h1>{res}</h1>
         
          
            </form>
        </div>
    )
}
export default Calc