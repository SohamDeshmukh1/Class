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
      <h1 className='text-3xl pt-4 ml-14 pl-[20px] text-[#ffffff] '>
        Choose your category :
      </h1>
      <div className='w-full h-[30px] flex justify-start p-5 pt-6 gap-10 items-center text-center'>
        <label className='text-white text-center flex justify-center items-center '>
          <input onClick={handleCheckboxClick} type="checkbox" id='audio' className="checkbox checkbox-sm checkbox-primary mr-2"/>
          Audio
        </label>
        <label className='text-white text-center flex justify-center items-center '>
          <input onClick={handleCheckboxClick} type="checkbox" id='gaming' className="checkbox checkbox-sm checkbox-primary mr-2"/>
          Gaming
        </label>
        <label className='text-white text-center flex justify-center items-center'>
        <input type="checkbox" id='mobile' defaultChecked onClick={handleCheckboxClick}  className="checkbox checkbox-sm checkbox-primary mr-2" />
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
