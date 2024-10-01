import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let[counter, updateCounter] = useState(5)

 // let counter = 5;

  const addValue = () =>{
    //counter = counter + 1
    updateCounter(counter + 1)
    if(counter >= 20){
      updateCounter(20)
    }
    console.log("Value added", counter)
  }

  const deleteValue = () =>{
    updateCounter(counter - 1)
    if(counter <= 0){
      updateCounter(0)
    }
  }

  return (
    <>
      <h1>New Project</h1>
      <h2>Counter value= {counter}</h2>

      <button onClick = {addValue}>Push value</button>

      <button onClick = {deleteValue}>Remove value</button>

      <p>To check the progress of counter</p>
    </>
  )
}

export default App
