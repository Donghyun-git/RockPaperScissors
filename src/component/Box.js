import React from 'react'

const Box = (props) => {

  return (
    <div className={`box ${props.result}`}>
        <h2> {props.name} </h2>
        <img className="img" src={props.item && props.item.img}></img>
        <p>{props.result}</p>
    </div>
  )
}

export default Box;