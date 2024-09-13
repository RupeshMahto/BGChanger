import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import React from 'react'


function MyApp(){
   return(
    <>
    <h1>Custom App !</h1>
    </>
   )
}

// const ReactElement = {
//     type:'a',
//     props:{
//         href:'https://google.com',
//         target:'_blank'
//     },
//     children: 'Click me to visit google'
// }

const anotherElement = (
    <a href="https://google.com" target='_blank'>visit google </a>
)

const anotherUser = "chai aur react"

const reactElement = React.createElement(
    'a',
    {href:'https://google.com', target:'_blanck'},
    'click me to visit google',
    anotherUser
)

ReactDOM.createRoot(document.getElementById('root')).render(
 
    reactElement
  
)
