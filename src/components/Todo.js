import React from 'react'
import { connect } from 'react-redux'
import {Toggle_Todo, Delete_Todo} from '../actions'


const DisplayTodos =(props)=>{
    function toggle(id){
        props.dispatch(Toggle_Todo(id));
    }

    function handleDelete(id){
        props.dispatch(Delete_Todo(id));
    }
    console.log(props)
    return(
        <ul>
            {
                props.allTodos.map(todo=>{
                    return(
                        <li style={{display:'flex',alignItems:'center'}} key={todo.id}>
                            <input type="checkbox" onChange={() => toggle(todo.id)} checked={todo.isDone}/>
                            <p style={{margin:'0 10px'}}>{todo.text}</p>
                            <span onClick={() => handleDelete(todo.id)}>x</span>
                        </li>
                    )
                })
            }
        </ul>
    )
}
function passStateToProps(state){
    return state
}

export default connect(passStateToProps)(DisplayTodos)