import React, { Component } from 'react'

class ComponentC extends Component {
  render() {
    console.log('component c')
    return (
     <>
     <h1>From Component -B Count is == {this.props.count}</h1>
     </>
         )
  }
}

export default ComponentC