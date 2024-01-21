import React, {useState} from 'react'


export const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState("")
// const changeHandler = (e) => {
//     e.preventDefault()
//     setValue(e.target.value);
//     //console.log(e.target.value);
// };

const handleSubmit = (e) => {
    e.preventDefault();
    if(value)
    { 
    addTodo(value)
    //clear value after adding
    setValue("");
  }
}
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input type="text" className='todo-input' placeholder='Enter item' onChange={(e)=> setValue(e.target.value)} value={value}/>
        <button type='submit' className='todo-btn'>Add Task</button>
    </form>
  )
}
