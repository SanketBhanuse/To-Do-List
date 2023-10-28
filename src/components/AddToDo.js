import React, {useState} from "react";
const AddToDo = ({addTodo}) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const submit = (e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert("please fill blank field")
        }else{

            addTodo(title , desc);
            setTitle("");
            setDesc("");
        }
    }
  return (
    <section id="add_todo">
        <div className="heading">Add Task</div>
        <form onSubmit={submit}>
            <div className="input_wrapper"> 
                <label className='task_imput_label label'>Task Title :- </label>
                <input className='task_imput input' value={title} onChange={(e)=>{setTitle(e.target.value)}} type="text" />
            </div>

            <div className="input_wrapper"> 
                <label className='discription_imput_label label'>Task Description :- </label>
                <textarea className='discription_imput input' value={desc} onChange={(e)=>{setDesc(e.target.value)}} />
            </div>
            <div className="sumbit_btn_wrapper">
                <button className="sumbit_btn" type='sumbit'>Add Task</button>
            </div>
        </form>
    </section>
  )
}

export default AddToDo