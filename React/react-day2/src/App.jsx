import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Card from './Comonents/Card'

function App() {
  return (
    <>
    <div className='flex'>
      <Card heading = {1} Discription = {'this is Discription for card 1'}/>  {/*props*/}
      <Card heading ={2} Discription = {'this is Discription for card 2'}/>
      <Card heading ={3} Discription = {'this is Discription for card 3'}/>
      <Card heading ={4} Discription = {'this is Discription for card 4'}/>
    </div>
      {/* <h1 className='text-red-700 text-9xl text-center' style={{background:"skyblue"}}>Dikshit</h1>  */}

    </>
  )
}

export default App
