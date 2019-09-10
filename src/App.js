import React, { Component } from 'react';
import './App.css';


class App extends Component { 
constructor(){
  super()
  this.state = {
    todo : [],
    value : "",
    
  }
}

addTodo(){
  if(this.state.value === ''){
    alert("Enter Value")
  }
  else{
console.log(this.state.value)
let {todo , value} = this.state;
let obj = {
  value,
  edit: false
}

todo.push(obj)
this.setState({
  todo: todo,
  value: ""
})
}
}
deleteTodo(i){
  this.state.todo.splice(i, 1)
  this.setState({
    todo: this.state.todo
  })
}
editTodo(i,v){
let {todo} = this.state;
todo[i].edit = true
// this.state.todo.splice(i,1,val)
this.setState({
  todo :this.state.todo,
  updateValue: v.value

})
}
upDate(i,v){
let {todo,updateValue} = this.state
todo[i].edit = false;
todo[i].value = updateValue;
this.setState({
  tood : todo
})
}

cancel(i){
  let {todo} = this.state;
  todo[i].edit = false;
  this.setState({
    todo : todo
  })
}
render() {
let {todo,value , updateValue} = this.state
return (
    <div className="todoApp">
    <h1>ToDo App</h1> 
    <input type="text" className="input" value={value}  placeholder="Write Something...." onChange={(e)=>this.setState({value:e.target.value})} />
    <button className="btn" onClick={this.addTodo.bind(this)}>Add</button>
    <button className="btn" onClick={()=> this.setState({todo: []})}>Delete All</button>
    <ol>
      {todo.map((v,i)=>
      <li key = {i} className="li">{ todo[i].edit ? 
        
        <div><input className="inpt2" value={updateValue} onChange={(e) => this.setState({updateValue: e.target.value })} type="text" />
      <button className="btn1" onClick={this.cancel.bind(this, i)}>Cancel</button>  
      <button className="btn1" onClick={this.upDate.bind(this, i,v)}>Update</button>
       </div>
      :
      <div> 
        {
      v.value}
      <button className="btn1" onClick={this.deleteTodo.bind(this, i)}>Delete</button>  
      <button className="btn1" onClick={this.editTodo.bind(this, i,v)}>Edit</button>  

      </div>}</li>)}

    </ol>
    </div>
    )
  }
}

export default App;




// Props Work
// import React, { Component } from 'react';
// // import Home from "./Components/Home"
// import Bheesham from './Sindhi/Bheesham'
// import Teerath from './Sindhi/Teerath'

// class App extends Component {
//   getDataFromChild(data){
//     console.log(data)
//     this.state = {
//       data: ""
//     }
//     this.getDataFromChild = this.getDataFromChild.bind(this)
//   }
//   render(){
//     return(
//       <div>
//         <h1>Hello App.js</h1>
//         <Bheesham name="Bheesham" age={20} func={this.getDataFromChild}/>
//         <Teerath getData={this.state.data}/>
  
//       </div>
      
    
//     )
//   }
// }

// export default App