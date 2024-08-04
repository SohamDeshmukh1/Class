import React, { useEffect, useState } from 'react'
import Choose from '../Components/Choose';

export default function Shop({category}) {
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
      <div className='flex'>
       <Choose />
      </div>
      <div className='flex flex-wrap gap-5 justify-between mt-[20px]'>
        {
         Data.filter(product => 
          category.includes(product.category) // Ensure category is an array
        ).map((product, index) => (
          <Card
            key={index}
            imageUrl={product.image}
            name={product.model}
            price={product.price + "$"}
            des={product.brand}
          />
        ))
        }
      </div>
    </div>
  )
}
