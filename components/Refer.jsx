const { useRef } = require("react")

const Refer=()=>{
    let demoRef=useRef()
    let a=()=>{
        demoRef.current.style.background="brown"}
        let b=()=>{
            demoRef.current.style.background="black"}
        
        return(
            <div>
                <div ref={demoRef}>rfeil</div>
                <button onClick={a}>brown</button>
                <button onClick={b}>dark</button>
            
            </div>
        )
}
export default Refer
