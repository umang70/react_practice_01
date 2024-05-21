import React from 'react'

function Navbar({data}) {
  return (
    <div className='w-full px-4 py-3 flex justify-between items-center'>
        <h3>Orange</h3>
        <div className='flex p-2 bg-orange-600 rounded-md text-sm'>
            <h3>Favourite</h3>
            <h4>{data.filter(elem=>elem.added).length}</h4>
        </div>

    </div>
  )
}

export default Navbar