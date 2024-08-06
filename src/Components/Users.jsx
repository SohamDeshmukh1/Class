import React from 'react'
import { useNavigate } from 'react-router-dom'
function Users({imageSrc,name})

{
  return (
    <div className='flex flex-wrap '>
      <div className='flex border border-white h-max p-2 bg-slate-500 rounded-2xl'>
        <div className='flex border border-white rounded-full bg-white'>
          <img className='rounded-full h-[50px] w-[50px]' src={imageSrc}/>
        </div>
        <div className='flex justify-start items-center text-2xl font-bold pl-4'>
          <h1>{name} </h1>
        </div>
      </div>
    </div>
  )
}
export default Users