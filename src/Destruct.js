import React, { useState } from 'react'

function Destruct(props) {
    // console.log('prosp',props)
    const {name,age} = props
    const [count, setCount] = useState(null)
  return (
    <div>Destruct ,{name} -- {props.age}</div>
  )
}

export default Destruct