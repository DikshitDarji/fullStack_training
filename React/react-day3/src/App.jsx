import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // states
  const [count,setCount] = useState(0);
  return (
    <>
      <div>
        <h1>the value of count {count}</h1>
        <button style={{marginRight:"10px"}} onClick={()=>{setCount(count+1)}}>increase count</button>
        <button onClick={()=>{setCount(count-1)}}>decrease count</button>
      </div>
    </>
  )
}

export default App
