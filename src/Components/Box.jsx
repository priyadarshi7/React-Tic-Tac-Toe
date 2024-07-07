import React from "react"

export default function Box(props){

    return(
        <button className="box" onClick={props.values}>{props.value}</button>
    )
}