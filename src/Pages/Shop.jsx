import React, { useEffect, useState } from 'react'
import Card from '../Components/Card'

export default function Shop() {

  const [Data, getData] = useState([]);
    const GetCards = async () => {
      const response = await fetch('https://fakestoreapi.in/api/products')
      const data = await response.json()
      console.log(data)
      getData(data.products);
    }
  useEffect(() => {
    GetCards()
  }, [])

  return (
    <div>
      {/* <div>
        If i need Content i might add here
      </div> */}
      <div className='flex flex-wrap gap-5 justify-between mt-[20px]'>
        {
          Data?.map((item, index) => {
              return(
                <Card
                key={index}
                imageUrl={item.image}
                name={item.model}
                price={item.price+"$"}
                des={item.brand}
              />
              )
          })
        }
      </div>
    </div>
  )
}
