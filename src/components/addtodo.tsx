import { FormEvent, useState } from "react"
import { useTodos } from "../store/todos"

const AddToDo = () => {
    const [todo,setTodo]=useState('')
    const {handleAddToDo}=useTodos()
    
    const handleFormSumit=(e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        handleAddToDo(todo)
        setTodo('')

    }

  return (
    <form onSubmit={handleFormSumit}>
      <input type='text' value={todo} onChange={(e)=>setTodo(e.target.value)}  placeholder='add task'/>
      <button type="submit">Add Task</button>
    </form>
  )
}

export default AddToDo
