import React, { useEffect } from 'react';

function Choose({check, setCheck}) {
  
  useEffect(() => {
    console.log(check);
  }, [check]);

  const handleCheckboxClick = (event) => {
    const { id, checked } = event.target;
    if (checked) {
      console.log("checked");
      setCheck((prevCheck) => [...prevCheck, id]);
    } else {
      console.log("unchecked");
      setCheck((prevCheck) => prevCheck.filter((item) => item !== id));
    }
  };

  return (
    <>
      <div className='w-full h-[30px] flex justify-start p-2 pt-6 gap-5 items-center text-2xl text-center'>
      <h1 className=' ml-14 pl-[10px] text-[#ffffff] '>Category :</h1>
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
    </>
  );
}

export default Choose;
