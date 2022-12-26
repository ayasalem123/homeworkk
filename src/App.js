
import { useState } from 'react';
import './App.css';
import Add from './components/add';

function App() {
  const [todos,setTodos]= useState([])
  const handleDelete=({id})=>{
    setTodos(todos.filter((el)=>el.id!==id))
  }
  return (
    <div className="App">
      <Add todos={todos} setTodos={setTodos}/>
      <ol>
      {todos.map(
        (el)=><div key={el.id}>
          <li  >{el.task}  <button onClick={()=>handleDelete(el)}>del</button></li>
        </div>
      )}
      </ol>
      
    </div>
  );
}

export default App;
