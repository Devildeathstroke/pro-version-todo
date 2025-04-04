import AddToDo from "./components/addtodo"
import Navbar from "./components/navbar"
import Todos from "./components/todos"
import "./App.css"


const App = () => {
  return (
    <div>
      <main>
        <h1>TODO-APP</h1>
        <Navbar/>
        <AddToDo/>
        <Todos/>
      </main>
    </div>
  )
}
export default App
