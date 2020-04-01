import { connect } from "react-redux"
import TodoList from "../components/TodoList"
import { VisibilityFilters } from "../actions"

const getVisibleTodos=(todos, filter)=>{
    switch(filter){
        case VisibilityFilters.SHOW_ALL: 
            return todos;
        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter(task=> task.completed)
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(task => !task.completed)
        default:
            throw new Error('Unknown filter:' + filter)
            console.log("sdsdasda")
        }
}


const mapStatetoProps = state=>({
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
})


export default connect(mapStatetoProps)(TodoList)