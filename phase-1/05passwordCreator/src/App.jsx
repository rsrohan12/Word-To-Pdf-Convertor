import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [number, setNumber] = useState(false)
  const [character, setCharacter] = useState(false)
  const [passsword, setPassword] = useState("")

  const passwordCreate = useCallback(() => {
    let pass = ""
    let str =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(number){
      str += "0123456789"
    }
    if(character){
      str += "!@#$%&^()"
    }

    for(let i=1; i<=length; i++){
      let char = Math.floor(Math.random() * str.length + 1)

      pass += str.charAt(char)
    }

    setPassword(pass)

  },[length, number, character, setPassword]) //setPassword is only written for optimisation

  useEffect(() => {
    passwordCreate()
  }, [length, number,character,passwordCreate])

  const passswordReference = useRef(null)

  const copyPassword = useCallback(() => {
    passswordReference.current?.select()
    window.navigator.clipboard.writeText(passsword)
  }, [passsword])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md
      rounded-lg px-4 my-4 text-orange-500 bg-gray-600'>
        <h1 className='text-white text-lg text-center my-3'>Password Creator</h1>
        <div className='flex shadow rounded-lg 
        overflow-hidden mb-4'>

          <input 
          type="text"
          value={passsword}
          className='outline-none w-full py-1 px-3'
          placeholder='password'
          readOnly
          ref={passswordReference}
          />
          <button
          onClick={copyPassword}
          className='outline-none bg-orange-600 text-white
          px-3 py-0.5 shrink-0'>copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center text-lg text-green-500 gap-x-1'>
            <input 
            type="range"
            min={7}
            max={20}
            value={length}
            className='cursor-pointer' 
            onChange={(e) => {setLength(e.target.value)}}
            />
            <label>Length: {length}</label>
          </div>
          <div className='flex items-center text-lg text-green-500 gap-x-2'>
            <input
            type="checkbox"
            defaultChecked={number}
            id="numberInput"
            onChange={() => {setNumber((prev) => !(prev))}} 
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className='flex items-center text-lg text-green-500 gap-x-2'>
            <input 
            type="checkbox"
            defaultChecked={character}
            id="characterInput"
            onChange={() => {setCharacter((prev) => !(prev))}} 
            />
            <label htmlFor="characterInput">Symbols</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
