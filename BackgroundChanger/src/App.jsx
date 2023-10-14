import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("white")

  return (
    <>
      <div className="flex items-end w-screen h-screen m-0 justify-center duration-200" style={{backgroundColor:color}}>
        <div className='fix fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 bg-white w-4/5 m-auto rounded-xl shadow-xl'>

          <div className='py-3 w-28 outline-none rounded-lg mx-2'>
            <button className='text-xl w-full text-white shadow-xl' style={{backgroundColor:'red'}} value='red' onClick={(e)=>setColor(e.target.value)}>Red</button>
          </div>
          <div className='py-3 w-28 outline-none rounded-lg mx-2'>
            <button className='text-xl w-full text-white shadow-xl' style={{backgroundColor:'green'}} value='green' onClick={(e)=>setColor(e.target.value)}>Green</button>
          </div>
          <div className='py-3 w-28 outline-none rounded-lg mx-2'>
            <button className='text-xl w-full text-white shadow-xl' style={{backgroundColor:'blue'}} value='blue' onClick={(e)=>setColor(e.target.value)}>Blue</button>
          </div>
          <div className='py-3 w-28 outline-none rounded-lg mx-2'>
            <button className='text-xl w-full text-black shadow-xl' style={{backgroundColor:'yellow'}} value='yellow' onClick={(e)=>setColor(e.target.value)}>Yellow</button>
          </div>
          <div className='py-3 w-28 outline-none rounded-lg mx-2'>
            <button className='text-xl w-full text-white shadow-xl' style={{backgroundColor:'black'}} value='black' onClick={(e)=>setColor(e.target.value)}>Black</button>
          </div>
          <div className='py-3 w-28 outline-none rounded-lg mx-2'>
            <button className='text-xl w-full text-white shadow-xl' style={{backgroundColor:'orange'}} value='orange' onClick={(e)=>setColor(e.target.value)}>Orange</button>
          </div>
          <div className='py-3 w-28 outline-none rounded-lg mx-2'>
            <button className='text-xl w-full text-white shadow-xl' style={{backgroundColor:'purple'}} value='purple' onClick={(e)=>setColor(e.target.value)}>Purple</button>
          </div>
          <div className='py-3 w-28 outline-none rounded-lg mx-2'>
            <button className='text-xl w-full text-white shadow-xl' style={{backgroundColor:'olive'}} value='olive' onClick={(e)=>setColor(e.target.value)}>Olive</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
