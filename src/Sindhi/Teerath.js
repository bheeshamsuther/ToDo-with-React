import React  from 'react'

export default class Bheesham extends React.Component {
    render(){
        // conosle.log(this.props.getData)
        return(
            <div style={{backgroundColor:"red"}}>{this.props.children}</div>
        )
    }
}

