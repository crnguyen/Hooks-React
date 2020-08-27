// import React, { Component } from "react"
import React, { useState } from "react"

//export default in front of function is another way to do export
const Count = (props) => {
    const [count, setCount] = useState(0)

    return (
        <>
        <h1>{props.title}</h1>
        <h3>{count}</h3>
        <div>
            <button>+</button>
            <button>-</button>
        </div>
        </>
    )

}

export default Count