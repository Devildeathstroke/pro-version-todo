import { useState } from "react"

const AddToDo = () => {
    const [todo,setTodo]=useState('')

  return (
    <form>
      <input type='text' value={todo} onChange={(e)=>setTodo(e.target.value)}  placeholder='add task'/>
      <button type="submit">Add Task</button>
    </form>
  )
}

export default AddToDo
