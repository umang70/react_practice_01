import React from 'react'

function Card({data ,handleclick ,index}) {
    const { Image,name,artist,added}=data
  return (
    <div className='w-32 bg-zinc-100 p-4 rounded-md'> <div className='w-20 h-20 bg-orange-600 rounded-md'> <img className='w-full h-full object-cover' src={Image} alt="" /></div>
    <div><h3 className='text-xl font-semibold'>{name}</h3><h6>{artist}</h6></div> <button 
   onClick={()=>handleclick(index)} className={`px-4 py-3 ${added?"bg-green-500":"bg-orange-500"} rounded-md`}>{added?"added":"add to fav"}</button></div>
  )
}

export default Card