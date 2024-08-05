import React from 'react'

function Users({imageSrc,name}) {
  return (
    <div className='min-h-screen flex flex-wrap px-10 py-10 '>
      <div className='flex border border-white h-max p-5 bg-slate-500 rounded-2xl'>
        <div className='flex border border-white rounded-full bg-white'>
          <img className='rounded-full h-[50px] w-[50px]' src={imageSrc}  alt='HE'/>
        </div>
        <div className='flex justify-start items-center text-2xl font-bold pl-4'>
          <h1>{name} </h1>
        </div>
      </div>
    </div>
  )
}
export default Users