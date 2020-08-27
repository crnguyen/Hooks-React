// import React, { Component } from "react"
import React, { useState, useEffect } from "react"
import DisplayCurrentCount from "./DisplayCurrentCount"
import MutateCountBtn from "./MutateCountBtn"
import axios from "axios"

//export default in front of function is another way to do export
const Count = (props) => {
    const [count, setCount] = useState(0)
    const [inspiration, setInspiration] = useState("Inspire me Kanye")
    const [clock, setClock] = useState(null)

    //effect with no cleanup
    useEffect(()=> {
        document.title = props.title
    })

    //effect with no cleanup and dependencies
    useEffect(()=>{
        axios.get("https://api.kanye.rest")
        .then(response => {
            console.log(response.data.quote)
            setInspiration(response.data.quote)
        })
    }, [count]) //use the [] to get the api response to run once
    //[count] - each time you press the +/- button, it gets another quote

    const noTick = () => clearInterval(clock)
    //effect with cleanup
    useEffect(()=>{
        setClock(setInterval(()=>console.log("tick"), 1000))
        //set the cleanup function
        return noTick
    }, [])

    let subtract = () => setCount(count - 1)
    
    return (
        <>
        {/* h1 tag with an inspirational kanye quote */}
        <h1>{inspiration}</h1>
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