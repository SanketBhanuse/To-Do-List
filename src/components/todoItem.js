import React from 'react'

const todoItem = ({todoitem, onDelete}) => {
  return (
    <section id="todo_item">
        <div className="todo_item_container">
            <div className="task">{todoitem.title}</div>
            <div className="tadk_description">{todoitem.description}</div>
            <a href="#" className='del_btn' onClick={()=>{onDelete(todoitem)}}>Delete</a>
        </div>
    </section>
  )
}

export default todoItem