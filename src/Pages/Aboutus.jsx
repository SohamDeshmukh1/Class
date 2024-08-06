import React, { useEffect, useState } from 'react'
import Users from '../Components/Users';
import { useNavigate } from 'react-router-dom';

export default function Aboutus() {
  const [filter,setFilter]=useState("");
  const navigate = useNavigate();
  const filtername = (e)=>{
    setFilter(e.target.value.toLowerCase())
  }

  const [data, setData] = useState([]);
  let Image = ("https://cdns.iconmonstr.com/wp-content/releases/preview/2012/240/iconmonstr-github-1.png")

  const users = async () => {
    const url = await fetch('https://fakestoreapi.in/api/users')
    const data = await url.json()
    setData(data.users)
  }
  useEffect(() => {
    users()
  }, [])

  return (
    <div>

      <div className='flex justify-center items-center pt-5 gap-5'>
          <input type="text" className='bg-transparent font-bold outline-none border p-2 border-white rounded-md'
          placeholder='Search' 
          onChange={filtername}
          />
          {/* <button className='p3 bg-white text-black font-bold p-2  rounded-md'>Search</button> */}
      </div>

      <div className='flex flex-wrap justify-evenly gap-5 py-10 px-10'>
        {
          filter == ""?data?.map((item, index) => {
            return (
              <div onClick={()=>navigate(`users/${item.username}`)} >
                <Users
                key={index}
                imageSrc={Image}
                name={`${item.name.firstname} ${item.name.lastname}`}
              />
              </div>
            )
          }):
          data?.filter((item) => 
                item.name.firstname.toLowerCase().includes(filter) ||
                item.name.lastname.toLowerCase().includes(filter))
              .map((item, index) => (
                <div onClick={()=>navigate(`users/${item.username}`)} >
                <Users
                key={index}
                imageSrc={Image}
                name={`${item.name.firstname} ${item.name.lastname}`}
              />
              </div>
              ))}
      </div>
    </div>
  )
}
