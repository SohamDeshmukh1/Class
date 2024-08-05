import React, { useEffect, useState } from 'react'
import Card from '../Components/Card'
import Choose from '../Components/Choose';

export default function Shop() {

  const [Data, getData] = useState([]);
  const [check,setCheck]=useState([]);
  const [category,setCategory]=useState([]);
    const GetCards = async () => {
      const response = await fetch('https://fakestoreapi.in/api/products')
      const data = await response.json()
      getData(data.products);
    }

// useEffect(() => {
//   Data?.map((item)=>{
//     if(item.category == check){
//       setCategory((prev)=>{
//         return [...prev,item.category]
//       })
//       console.log(category);
//     }
//   })
// }, [check])



  useEffect(() => {
    GetCards()
    
  }, [])
  return (
    <div>
      <div className='flex'>
       <Choose 
       check={check}
       setCheck={setCheck}
       />
      </div>
      <div className='flex flex-wrap gap-5 justify-between mt-[20px]'>
      {check.length === 0
          ? Data?.map((item, index) => (
              <Card
                key={index}
                imageUrl={item.image}
                name={item.model}
                price={item.price + "$"}
                des={item.brand}
              />
            ))
          : Data?.filter(item => check.includes(item.category)).map((item, index) => (
              <Card
                key={index}
                imageUrl={item.image}
                name={item.model}
                price={item.price + "$"}
                des={item.brand}
              />
            ))}
      </div>
    </div>
  )
}
