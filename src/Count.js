// import React, { Component } from "react"
import React, { useState } from "react"
import DisplayCurrentCount from "./DisplayCurrentCount"
import MutateCountBtn from "./MutateCountBtn"

//export default in front of function is another way to do export
const Count = (props) => {
    const [count, setCount] = useState(0)

    let subtract = () => setCount(count - 1)
    

    return (
        <>
        <h1>{props.title}</h1>
        <DisplayCurrentCount count={count}/>
        <div>
            <MutateCountBtn 
            display={"+"}
            handleClick={()=> setCount(count + 1)}
            />
            <MutateCountBtn 
            display={"-"}
            handleClick={subtract}
            />
        </div>
        </>
    )

}

export default Count