import React, { useEffect, useState } from 'react'
import Users from '../Components/Users';

export default function Aboutus() {
  const [data, setData] = useState([]);
  const image ="https://cdns.iconmonstr.com/wp-content/releases/preview/2012/240/iconmonstr-github-1.png";
  
  const users = async () => {
    const url = await fetch('https://fakestoreapi.in/api/users')
    const data = await url.json()    
    setData(data.users)
  }

  useEffect(() => {
    users()
  }, [])

console.log(data);

  return (
    <div>
      {
        data?.map( (item,index)=>{
          <Users
          key={index}
          imageSrc={image}
          name={`${item.name.firstname} ${item.name.lastname}`}
          />
        })
      }
    </div>
  )
}
