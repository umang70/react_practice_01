import React, { useState } from 'react'

function Navbar() {
    const [val,setval]=useState(true);
    const data=[{Image:"https://images.unsplash.com/photo-1715521801502-42db7b79573b?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",name:"amazon basic",discription:"cheetah ji khde bahi" ,instock:true},{Image:"https://images.unsplash.com/photo-1715833027976-7183e02993da?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",name:"flipkart",discription:"lorem hbcnud cndnc cnidnicd cndi" ,instock:false},{Image:"https://images.unsplash.com/photo-1716203034902-003b9e7e1946?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",name:"ali baba",discription:"kuch bhi likh sakta hu mai meri marzi",instock:true}]
    function handleclick(){
        alert("Click")
    }

return(
    <div className=' justify-flex bg-zinc-100 absolute   rounded-md flex gap-6' >
        {data.map((elem,index)=>(
            <div ><div className='w-full h-32 bg-zinc-300'><img className='w-full h-full object-cover' src={elem.Image} alt="" /></div><div className='w-full px-3 py-4'><h2>{elem.name}</h2> <p>{elem.discription}</p></div>
            <button onClick={()=>{handleclick()}} className={`${elem.instock?"bg-rose-400":"bg-blue-200"}`}>{elem.instock?"instock":"out of stock"}</button>
            </div>



        ) )}
       <button onClick={()=>setval(!val)} className={`${val?"bg-red-500":"bg-green-700"} h-12 w-13`}> { val?"out of stok":"in stock"}</button>
       {/* probes */}







    </div>
    
)



 
}

export default Navbar