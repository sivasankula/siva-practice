import React from 'react'

function ComponentA(props) {
  return (
    <div>
        name- {props.name}
        age -{props.age}
        <div>
            {
                props.isActive ? <div>IsActive</div> : <div>IsInActive</div>
            }
        </div>
        <div>
            title -- {props.myObj.title}
            ID: {props.myObj.id}
        </div>
        <div>
            {props.children}
        </div>
    </div>
  )
}

export default ComponentA