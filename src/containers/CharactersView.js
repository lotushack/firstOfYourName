import React, {Component} from "react"


export default class CharactersView extends Component{
  render(){
    let className = `hw-100-percent ${this.props.thronepedia}`
    return(
      <div className={className}>
      </div>
    )
  }
}