import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let objects = {
    username: "robo",
    age: 550
  }
  let newArr = [1,3,5]

  return (
    <>
      <h1 className = 'bg-orange-400 text-black p-5 rounded-xl mb-4'>Project 3: Tailwind start</h1>
      <Card username = "Click and Go" />
      <Card/>


    </>
  )
}

export default App