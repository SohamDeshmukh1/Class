import React, { useEffect, useState } from 'react'
import Users from '../Components/Users';

export default function Aboutus() {

    const [data,setData]=useState([]);
     let Image = ("https://cdns.iconmonstr.com/wp-content/releases/preview/2012/240/iconmonstr-github-1.png")

    const users = async()=>{
        const url = await fetch('https://fakestoreapi.in/api/users')
        const data = await url.json()
        setData(data.users)  
    }
    useEffect(() => {
        users()
    }, [])

  return (
    <div>
      <div>
        {
          data?.map((item,index)=>{
              return(
                <Users
                key={index}
                imageSrc={Image}
                name={`${item.name.firstname} ${item.name.firstname}`}
                />
              )
          })
        }
      </div>
    </div>
  )
}
