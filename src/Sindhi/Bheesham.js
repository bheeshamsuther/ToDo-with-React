import React  from 'react'

export default class Bheesham extends React.Component {
    render(){
        return(
            <div style={{backgroundColor:"darkcyan"}}>{this.props.children}
            <button onClick={()=>this.props.func("Bheesham")}>Send</button>
            </div>
        )
    }
}

