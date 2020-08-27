import React from "react"

export default function MutateCountBtn(props){
return <button className="cool-btn" onClick={props.handleClick}>{props.display}</button>
}