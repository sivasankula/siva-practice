import React from "react";

// function Welcome(){
//     return(
//         <div>
//             Hii
//         </div>
//     )
// }

const Welcome = (props) => {
    console.log(props)
    return(
        <div>
            <h1>hi welcome {props.name}</h1>
            <h2>hi my age{props.age}</h2>
            {props.children}
        </div>
    )
}

export default Welcome;