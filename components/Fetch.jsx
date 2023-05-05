import { Fragment, useState } from "react"
import content from "./userData.json"
import design from "./fetch.module.css"
const Fetch= ()=>{
    let [data,setData]=useState(content)
    return(
        <div id={design.fetch}>
            { data.map((x)=>{
                return(
                   <Fragment key={x.id}>
                    <h1>    <i> NAME:{x.login}</i></h1>
                    <h5>id:{x.id}</h5>
                    </Fragment>
                )
            })}
        </div>
    )
}
export default Fetch