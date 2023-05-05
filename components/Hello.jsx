const Hello=(props)=>{
    console.log(props);
    return(
        <div>
            <h1>hello {props.data}</h1>
        </div>
    )
}
export default Hello