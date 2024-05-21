import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import './index.css'
import Card from './Components/Card'







function App() {
  const data=[{Image:"https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2luZ2VyfGVufDB8fDB8fHww",name:"umang",artist:"sher",added:false},{Image:"https://images.unsplash.com/photo-1517230878791-4d28214057c2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2luZ2VyfGVufDB8fDB8fHww" , name:"never give up",artist:"sherni",added:false},{Image:"https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2luZ2VyfGVufDB8fDB8fHww",name:"unstopable",artist:"rajat dalal" ,added:false}]


const [song,setsong]=useState(data)
const handleclick=(index) =>{
  setsong((prev)=>{
     return prev.map((elem , elemindex)=>{
      if(elemindex==index) return{...elem,added:!elem.added}




      return elem

     })
  })
  

}

  return (
    <div><Navbar data={song}/>
    <div className='flex gap-10'>
      {song.map((elem,index)=>(
        < Card data={elem }  handleclick={handleclick} index={index} key={index}/>
      ))}
    </div>
   
    </div>
    
  )
}

export default App
