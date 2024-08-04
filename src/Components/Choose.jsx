import React, { useEffect } from 'react';

function Choose() {

  const handleCheckboxClick = () => {

  };
  return (
    <>
      <h1 className='text-3xl ml-14 text-[#ffffff]'>
        Choose your category :
      </h1>
      <div className='w-full h-[30px] flex justify-start p-5 pt-6 gap-10 items-center text-center'>
        <label className='text-white text-center flex justify-center items-center '>
          <input
            type="checkbox"
            id='audio'
            className="checkbox checkbox-sm checkbox-primary mr-2"
            onChange={handleCheckboxClick} 
          />
          Audio
        </label>
        <label className='text-white text-center flex justify-center items-center '>
          <input
            type="checkbox"
            id='gaming'
            className="checkbox checkbox-sm checkbox-primary mr-2"
            onChange={handleCheckboxClick} 
          />
          Gaming
        </label>
        <label className='text-white text-center flex justify-center items-center'>
          <input
            type="checkbox"
            id='mobile'
            className="checkbox checkbox-sm checkbox-primary mr-2"
            onChange={handleCheckboxClick} 
          />
          Mobile
        </label>
        <label className='text-white text-center flex justify-center items-center'>
          <input
            type="checkbox"
            id='tv'
            className="checkbox checkbox-sm checkbox-primary mr-2"
            onChange={handleCheckboxClick} 
          />
          Television
        </label>
      </div>
    </>
  );
}

export default Choose;
