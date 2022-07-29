
import React,{Component} from "react";

class User extends Component{
    constructor(){
        super()
        this.state = {}
    }
  
    render(){
        return(
            <div>
                User - {this.props.name} age -{this.props.age}
            </div>
        )
    }

}
export default User
