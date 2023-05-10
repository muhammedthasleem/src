import { useRef } from "react"

const Form=()=>{
    let nameRef=useRef()
    let salaryRef=useRef()
    let companyRef=useRef()
    let formHandle=(e)=>{
        e.preventDefault()
        let data1=nameRef.current.value
        let data2=salaryRef.current.value
        let data3=companyRef.current.value
        console.log(data1,data2,data3)

    }

    return (
        <div>
            <form action="">
            <label>Name</label>
            <input type="text" ref={nameRef} />
            <label >salary</label>
            <input type="number" ref={salaryRef}/>
            <label >company</label>
            <input type="text" ref={companyRef} />
            <button onClick={formHandle}>submit</button>
            </form>
        </div>
    )
}
export default Form 