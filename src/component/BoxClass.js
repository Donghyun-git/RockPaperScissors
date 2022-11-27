import React, { Component } from 'react'

export default class BoxClass extends Component {
  
  render() {
    return (
        <div className={`box ${this.props.result}`}>
        <h2> {this.props.name} </h2>
        <img className="img" src={this.props.item && this.props.item.img}></img>
        <p>{this.props.result}</p>
    </div>
    )
  }
}
