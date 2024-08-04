import React, {  } from 'react'

function Choose({}) {
  const handleCheckboxClick = ()=>{

  }
    return (
      <>
        <div>
        <h1 className='text-3xl '>
          Choose your category :
        </h1>
        <div className='w-full ml-1 h-[30px] flex justify-start p-5 pt-6 gap-10 items-center text-center'>
          <label className='text-white text-center flex justify-center items-center '>
            <input onClick={handleCheckboxClick} type="checkbox" id='audio' className="checkbox checkbox-sm checkbox-primary mr-2"/>
            Audio
          </label>
          <label className='text-white text-center flex justify-center items-center '>
            <input onClick={handleCheckboxClick} type="checkbox" id='gaming' className="checkbox checkbox-sm checkbox-primary mr-2"/>
            Gaming
          </label>
          <label className='text-white text-center flex justify-center items-center'>
          <input type="checkbox" id='mobile' onClick={handleCheckboxClick}  className="checkbox checkbox-sm checkbox-primary mr-2" />
            Mobile
          </label>
          <label className='text-white text-center flex justify-center items-center'>
            <input onClick={handleCheckboxClick} type="checkbox" id='tv' className="checkbox checkbox-sm checkbox-primary mr-2"/>
            Television
          </label>
        </div>
        </div>
      </>
    );
  }
  
  export default Choose;
