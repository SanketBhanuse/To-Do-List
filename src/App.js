import './custom.css';
import Header from "./components/header";
import Todos from "./components/todos";
import React, {useState} from "react";
import  {useEffect} from "react";
import AddToDo from './components/AddToDo';
import Tabs from './components/Tabs';
function App() {
  let initTodo;
    if(localStorage.getItem("todos")=== null){
      initTodo =[];
    }
    else{
      initTodo = JSON.parse(localStorage.getItem("todos"))
    }
  const remove= (todo)=>{
    console.log("I am delete", todo);
     settodolist(todolist.filter((e)=>{
      return e!== todo;
       
     }))
     localStorage.setItem("todos", JSON.stringify(todolist));
  }
  const AddTodo = (title , desc)=>{
    let sno;
    if (todolist.length===0){
      sno = 0;
    }else{
       sno= todolist[todolist.length-1].sno+1;
    }
    const myTodo ={
      sno:sno,
      title: title,
      description: desc,
    }
    settodolist([...todolist, myTodo]); 
   
     
  }
  const [todolist, settodolist] = useState(initTodo)
  useEffect(() => { 
    localStorage.setItem("todos", JSON.stringify(todolist)); 
  }, [todolist])
  return (
    <div className="App">
      <Header title="To Do List" desc="true"/>
      <AddToDo addTodo={AddTodo}/>
      <Todos todos={todolist} remove={remove}/>
      {/* <Tabs/> */}
    </div>
    
  );
}

export default App;