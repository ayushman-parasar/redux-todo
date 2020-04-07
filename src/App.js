import React from 'react';
import { connect } from 'react-redux'
import './App.css';
import DisplayTodos from './components/Todo'
import { Add_Todo, Change_Tab } from './actions'

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
  handleStatus=(tab)=> {
    this.props.dispatch(Change_Tab(tab));
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
        <div>
            <button 
            className={this.props.currentTab === "all" ? "active" : ""}
            onClick={()=>this.handleStatus('all')}>All</button>
            <button 
            className={this.props.currentTab === "completed" ? "active" : ""}
            onClick={()=>this.handleStatus('completed')}>Completed</button>
            <button 
            className={this.props.currentTab === "active" ? "active" : ""}
            onClick={()=>this.handleStatus('active')}>Active</button>
            {/* <button 
            className={this.props.currentTab === "clear" ? "active" : ""}
            onClick={()=>this.handleStatus('clear_completed')}>Clear Completed</button> */}
          </div>
      </div>
    )
  }
}

function passStateAsProps(state){
  return state
}
export default connect(passStateAsProps)(App);
