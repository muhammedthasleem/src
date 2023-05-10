import Nav from "./components/Nav"
import Hello from "./components/Hello"
import Propsarray from"./components/Propsarray"
import Classbased from "./components/Classbased"
import State from "./components/State"
import Incri from "./components/Incri"
import Arraystate from"./components/Arraystate"
import Fetch from "./components/Fetch"
import "./global.css"
import FirstPage from "./components/FirstPage"
import Refer from "./components/Refer"
import Form from "./components/Form"
import Calc from"./components/Calc"
import Controlled from "./components/Controlled"
import Calcuc from "./components/Calcuc"

const App =()=>{
    // return (
    //     <div>
            {/* <Nav/>
            <h1>hello world</h1>
            <Hello data="world"/>
            <Hello data="galaxy"/>
            <Hello/> 
             */}

// let person={ name:"ABC",id:458,skills:["html","css","js"],address:{pincode:546445,place:"banglore"}}
    //     </div>
    // )
    return(
        <div>
            <Nav/>
            <FirstPage/>
            <Refer/>
            <Controlled/>
            <Calcuc/>
            {/* <Form/>
            <Calc/> */}
            {/* <Propsarray webtech={person}/>
            <Classbased/>
            <State/>
            <Incri/>
            <Arraystate/>
            <Fetch/> */}
        </div>
    )
}
export default App;
