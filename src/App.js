import React from 'react';
import { connect } from 'react-redux'
import './App.css';
import DisplayTodos from './components/Todo'
import { Add_Todo } from './actions'

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      input:""
    }
  }
  handleChange =({target})=>{
    this.setState({
      input:target.value
    })
  }

  handleSubmit =()=>{
    this.props.dispatch(Add_Todo(this.state.input))
    this.setState({
      input:''
    })
  }

  render(){
    return(
      <div>
        <h1>Redux Todos</h1>
        <div>
          <input type="text" value={this.state.input} placeholder="what needs to be done" onChange={this.handleChange}/>
          <button onClick={this.handleSubmit}>Add Todo</button>
        </div>
        < DisplayTodos />
      </div>
    )
  }
}

function passStateAsProps(state){
  return state
}
export default connect(passStateAsProps)(App);
