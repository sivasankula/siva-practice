import React from 'react'

function MyJsx() {
  return (
    // <div>
    //     <h1>Hi Siraj</h1>
    // </div>
    React.createElement('div',{id:'MyDiv'},React.createElement('h1',{id:'MyH1El'},"Hi Siraj"))
  )
}

export default MyJsx