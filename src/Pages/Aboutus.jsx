import React, { useEffect, useState } from 'react'
import Users from '../Components/Users';

export default function Aboutus() {

    const [data,setData]=useState([]);

    const users = async()=>{
        const url = await fetch('https://fakestoreapi.in/api/users')
        const data = await url.json()
        setData(data.users)  
    }
    useEffect(() => {
        users()
        console.log(data);
        
    }, [])
  return (
    <div>
      <Users
      imageSrc={"C:\Users\Admin\Downloads\Compressed\github-mark-c791e9551fe4\github-mark"}
      />
    </div>
  )
}
