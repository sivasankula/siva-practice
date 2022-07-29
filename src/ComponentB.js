import React, { Component } from 'react'
import ComponentC from './ComponentC'
import ComponentD from './ComponentD'

class ComponentB extends Component {
    constructor(){
        super()
     this.state = {
        msg:'Hi siraj',
        count:0,
        
     }
    }
    
  render() {
    const {msg,count} = this.state
    
    console.log('Component -b', this.state)
    return (

      <div>
        <h1>Count -- {count}</h1>
        <h2>{msg}</h2>
        <button onClick={()=>{this.setState({count:this.state.count +1})}}>increment</button>
        {/* <button onClick={()=>{this.setState({count:this.state.count +1},()=>{console.log('state updated')})}}>increment</button> */}
        {/* <button onClick={()=>{this.setState((prve) => ({count:prve.count +1}))}}>increment</button> */}
        <ComponentC  count={this.state.count}/>
        <ComponentD />
      </div>
    )
  }
}

export default ComponentB