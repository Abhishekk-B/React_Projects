import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'
// import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';
// import FormGroup from '@mui/material/FormGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Box from '@mui/material/Box';
// import Slider from '@mui/material/Slider';

function App() {
  const [len, setLen] = useState(10)
  let [password,setPassword]=useState("")
  const [inpValue, setInpValue]=useState('')
  const [isNumberAllowed, setisNumberAllowed]=useState(false)
  const [isCharacterAllowed, setisCharacterAllowed]=useState(false)
  const passwordRef=useRef(null);
  const passwordGenerator=useCallback((()=>{
    let pass=''
    let string1="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    let numb="0123456789"
    let chars="!@#$%^&*()_{}[]:;?"
    if (isNumberAllowed) {      
      string1 +=numb
    }
    if (isCharacterAllowed) {      
      string1 +=chars
    }
    for (let index = 0; index < len; index++) {      
      let k=Math.floor(Math.random()*string1.length+1)
      pass +=string1.charAt(k)      
    }
    if (isNumberAllowed) {
      let c=Math.floor(Math.random()*numb.length)
      let p=Math.floor(Math.random()*pass.length)
      pass=pass.replace(pass[p],numb[c])
    }
    if (isCharacterAllowed) {
      let c=Math.floor(Math.random()*chars.length)
      let p=Math.floor(Math.random()*pass.length)
      pass=pass.replace(pass[p],chars[c])
    }
    setPassword(pass)
  }),[len,isCharacterAllowed,isNumberAllowed])

  const copyValue=useCallback(()=>{
    passwordRef.current?.select()
    // passwordRef.current?.setSelectionRange(0,3)
    window.navigator.clipboard.writeText(password)
  },[password])


  useEffect(()=>{
    passwordGenerator()
  },[isCharacterAllowed,isNumberAllowed,len])
  const sliderValue=()=>{
    console
  }

  return (
    <>
      <div className="main">

        <div className="form">

          <div className="data">
            <input type="text" value={password} onChange={(e)=>console.log(e.target.value)} placeholder='Password' readOnly ref={passwordRef}/>
            <button type="button" onClick={copyValue}>
              Copy
            </button>
            <button type="button" onClick={()=>{passwordGenerator()}}>
              Retry
            </button>
          </div>

          <div className='variables'>      
          <input
          type="range"
          min='1'
          max='20'
          defaultValue='10'
          className="transparent h-[4px] w-full cursor-pointer appearance-none border-transparent bg-neutral-200 dark:bg-neutral-600"
          id="customRange1" onChange={(e) => { setLen(e.target.value) }}/>
          <label className="text-neutral-700 dark:text-neutral-200 mx-2">{"Length("+len+")"}</label>
          <input
          type="checkbox" className=" bg-neutral-200 dark:bg-neutral-600"
          id="customRange1" checked={isNumberAllowed} onChange={(e)=>{setisNumberAllowed(e.target.checked)}}/>
          <label className="text-neutral-700 dark:text-neutral-200 mx-2">Numbers</label>
          <input
          type="checkbox" className=" bg-neutral-200 dark:bg-neutral-600"
          id="customRange1" checked={isCharacterAllowed} onChange={(e)=>{setisCharacterAllowed(e.target.checked)}}/>
          <label className="text-neutral-700 dark:text-neutral-200 mx-2">Characters</label>
          

          </div>

        </div>

      </div>
    </>
  )
}

export default App



// using Material UI

// import { useCallback, useEffect, useRef, useState } from 'react'
// import './App.css'
// import Stack from '@mui/material/Stack';
// import Button from '@mui/material/Button';
// import FormGroup from '@mui/material/FormGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Box from '@mui/material/Box';
// import Slider from '@mui/material/Slider';

// function App() {
//   const [len, setLen] = useState(10)
//   let [password,setPassword]=useState("")
//   const [inpValue, setInpValue]=useState('')
//   const [isNumberAllowed, setisNumberAllowed]=useState(false)
//   const [isCharacterAllowed, setisCharacterAllowed]=useState(false)
//   const passwordRef=useRef(null);
//   const passwordGenerator=useCallback((()=>{
//     let pass=''
//     let string1="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
//     if (isNumberAllowed) {
//       string1 +="0123456789"
//     }
//     if (isCharacterAllowed) {
//       string1 +="!@#$%^&*()_{}[]:;?"
//     }
//     for (let index = 0; index < len; index++) {      
//       let k=Math.floor(Math.random()*string1.length+1)
//       pass +=string1.charAt(k)
      
//     }
//     setPassword(pass)
//   }),[len,isCharacterAllowed,isNumberAllowed])

//   const copyValue=useCallback(()=>{
//     passwordRef.current?.select()
//     // passwordRef.current?.setSelectionRange(0,3)
//     window.navigator.clipboard.writeText(password)
//   },[password])


//   useEffect(()=>{
//     passwordGenerator()
//   },[isCharacterAllowed,isNumberAllowed,len])
  

//   return (
//     <>
//       <div className="main">
//         <div className="form">
//           <div className="data">
//             <Stack spacing={2} direction="row">
//               <input type="text" value={password} onChange={(e)=>console.log(e.target.value)} placeholder='Password' readOnly ref={passwordRef}/>
//               <Button variant="contained" onClick={copyValue}>Copy</Button>
//             </Stack>
//           </div>
//           <div className='variables'>
//             <FormGroup>
//               <Stack spacing={2} direction="row">
//                 <FormControlLabel control={<Box sx={{ width: 200, padding: 2, margin: 1 }}>
//                   <Slider defaultValue={8} aria-label="Default" valueLabelDisplay="auto" onChange={(e) => { setLen(e.target.value) }} />
//                 </Box>} label={"Length(" + len + ")"} />
//                 <FormControlLabel control={
//                 <Checkbox checked={isNumberAllowed} onChange={(e)=>{setisNumberAllowed(e.target.checked)}}/>
//                 } label="Numbers" />
//                 <FormControlLabel control={
//                 <Checkbox checked={isCharacterAllowed} onChange={(e)=>{setisCharacterAllowed(e.target.checked)}}
//                 />} label="Characters" />
//               </Stack>
//             </FormGroup>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default App
