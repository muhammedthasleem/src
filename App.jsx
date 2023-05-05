import Nav from "./components/Nav"
import Hello from "./components/Hello"
import Propsarray from"./components/Propsarray"
import Classbased from "./components/Classbased"
import State from "./components/State"
import Incri from "./components/Incri"
import Arraystate from"./components/Arraystate"
import Fetch from "./components/Fetch"
import "./global.css"

const App =()=>{
    // return (
    //     <div>
            {/* <Nav/>
            <h1>hello world</h1>
            <Hello data="world"/>
            <Hello data="galaxy"/>
            <Hello/> 
             */}

let person={ name:"ABC",id:458,skills:["html","css","js"],address:{pincode:546445,place:"banglore"}}
    //     </div>
    // )
    return(
        <div>
            <Propsarray webtech={person}/>
            <Classbased/>
            <State/>
            <Incri/>
            <Arraystate/>
            <Fetch/>
        </div>
    )
}
export default App;
