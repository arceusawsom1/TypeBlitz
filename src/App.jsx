import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import TextField from '@mui/material/TextField';
import './App.css'
import { useEffect } from 'react';

function App() {
  const [target, setTarget] = useState("A paragraph is defined as \"a group of sentences or a single sentence that forms a unit\" (Lunsford and Connors 116). Length and appearance do not determine whether a section in a paper is a paragraph. For instance, in some styles of writing, particularly journalistic styles, a paragraph can be just one sentence long.")
  const [errorCount, setErrorCount] = useState(0);
  const [totalAttempts, setTotalAttempts] = useState(0);
  const [seconds, setSeconds]  = useState(0);
  
  const changeHandler = (e) =>{
    const newChar = e.target.value
    setTotalAttempts(totalAttempts+1);
    if (newChar===target.substring(0,1)){
      console.log("Correct")
      setTarget(target.substring(1,target.length));
    } else{
      setErrorCount(errorCount+1)
    }
  }
  useEffect(()=>{
    setTimeout(addSecond, 1000);
  },[seconds])
  const addSecond = () =>{
    setSeconds(seconds+1);
  }

  return (
    <>
      <h1>Typing Challenge</h1>
      <p>Accuracy: {Number.parseFloat(100 - ((errorCount/totalAttempts)*100)).toFixed(2)}%</p>
      <p>Errors: {errorCount}</p>
      <p>WPM: {Number.parseFloat((totalAttempts-errorCount) / seconds*16).toFixed(1)}</p>
      <p>
        <span style={{color:"blue", fontSize:40, textDecoration:"underline"}}>
          {target.substring(0,1)===" "? "_" : target.substring(0,1)}
        </span>
        {target.substring(1,40)}...</p>
      <TextField value={""} onChange={changeHandler}/>
    </>
  )
}

export default App
