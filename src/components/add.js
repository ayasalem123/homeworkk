import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
export default function Add({todos,setTodos} ){
    // const [newtodo,setNewtodo]= useState({id:uuidv4(),task:""})
    const [newtodo,setNewtodo]= useState("")
    // const handleChange=(event)=>{
    //     setNewtodo({...newtodo,[event.target.name]:event.target.value});
    // }
    const handleChange=(event)=>{
        setNewtodo( event.target.value);
    }
    // const submitHandler=(event)=>{
    //     event.preventDefault()
    //     setTodos([...todos,newtodo])
    // }

    const submitHandler=(event)=>{
        event.preventDefault()
        setTodos([...todos,{id:uuidv4(),task:newtodo}])
        setNewtodo("")
    }
    return( <div>
        <form onSubmit={submitHandler}>
        <input name="task" type="text" placeholder="write your todo" value={newtodo} onChange={handleChange}/>
        <button type="submit" >add</button>
        </form>
        
    </div>)
}