import React from 'react'
import TodoItems  from './todoItem';
import noData from "../images/no-data.png"
const todos = (props) => {
  return (
    <section id="todos_wrpper">
      <div className="heading">Your To Do List</div>
        <div className="wrap_items">
            {props.todos.length===0? 
            <div className="no_data_container"> 
            <div className='img_wrapper'> 
                <img src={noData} alt="" />
            </div>
            </div>
            : 
            props.todos.map((todo)=>{

            return<TodoItems  todoitem={todo} key={todo.sno} onDelete={props.remove}/>
            })}
            
             
        </div>
    </section>
  )
}

export default todos