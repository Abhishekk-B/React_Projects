import { useState} from 'react'
import './App.css'
import CancelIcon from '@mui/icons-material/Cancel';
import check from './assets/images/check.png'
import circle from './assets/images/circle.png'

function App() {
  const [inputValue, setInputValue] = useState("")
  const [tasklist, setTaskList] = useState([])
  const fetchData=()=>{
    setTaskList((tasklist)=>{
      const newList=[...tasklist,inputValue]
      setInputValue("")
      return newList
    })
  }
  function removeTask(i){
    const updatedList=tasklist.filter((elem,id)=>{
        return i!=id;
    })
    setTaskList(updatedList)
  }
  function taskDone(e){
    if(e.target.classList.toggle("checked")){
      e.target.previousElementSibling.src=check
    }
    else{
      e.target.previousElementSibling.src=circle
    }
  }


  return (
    <>
      <div className="main">
        <div className="display">
            <h2>To Do App</h2><hr/>
            <div className="inputValues">
                <input type="text" spellCheck="false" value={inputValue} onChange={(e)=>{setInputValue(e.target.value)}}/>
                <button onClick={fetchData}>Add</button>
            </div>
            {
              tasklist.map((task, index)=>{
                return (<div className="tasks" key={index}>
              <p className='tasktext' onClick={(e)=>{taskDone(e)}}> <img src={circle} alt="" /><i>{task}</i></p>
              <span id='remove' onClick={()=>{removeTask(index)}}>
                <CancelIcon/></span>
          </div>)
              })
            }
            {tasklist.length>1 && <button id="btn" onClick={()=>{setTaskList([])}}>Remove all tasks</button>}
        </div>        
    </div>
    </>
  )
}

export default App

