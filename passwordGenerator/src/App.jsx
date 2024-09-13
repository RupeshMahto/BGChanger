import { useState,useCallback,useEffect,useRef } from 'react'

import './App.css'

function App() {
  const [length, setlength] = useState(9)
  const [numberAllowed,setNumberAllowed] = useState(false)
  const [charAllowed,setCharAllowed] = useState(false)
  const [password,setPassword] = useState("")

  //useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length+1)
      
      pass += str.charAt(char)
    }
     
     setPassword(pass)

  }, [length,numberAllowed,charAllowed,setPassword ] )

   const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,25 );
    window .navigator.clipboard.writeText(password)
   },
  [password])

   useEffect(()=>{
    passwordGenerator()

   },[length,numberAllowed,charAllowed,passwordGenerator])

  return (
    <>
   <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 text-orange-500 bg-gray-500'>
    <h1 className='text-white text-center font-bold text-yellow-300 my-2'>Password Generator</h1>
    <div className='flex shadow rounded-lg owerflow-hidden mb-4'>
      <input type='text' 
      value = {password}
      className='outline-none w-full py-1 px-3'
      placeholder='password'
       readOnly
       ref={passwordRef}
      />
      <button
      onClick={copyPasswordToClipboard}
      className='outline-none bg-blue-700 text-yellow-500 px-3 py-1 shrink-0 rounded-lg'>Copy</button>
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type='range'
       min={6}
       max={100}
       value={length}
       onChange={(e)=> {setlength(e.target.value)}}
       className='cursor-pointer'
        />
        <label>length:{length}</label> 
      </div>
      <div className='flext items-center gap-x-1'>
        
         <input
         type='checkbox'
         defaultChecked = {numberAllowed}
         id='numberInput'
         onChange={()=>{
          setNumberAllowed((prev) => !prev);
         }}
         />
         <label htmlFor='numberInpute'>Numbers</label>
         <input
         type='checkbox'
         defaultChecked = {numberAllowed}
         id='CharInput'
         onChange={()=>{
          setCharAllowed((prev) => !prev);
         }}
         />
         <label htmlFor='characterInput'>Characters</label>
         
         </div>
    </div>
   </div>
    </>
  )
}

export default App
