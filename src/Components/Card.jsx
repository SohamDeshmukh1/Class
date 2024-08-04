import React from 'react'

export default function Card({ imageUrl, name, price, des }) {
    return (
        <div>
            <div className="h-[300px] w-[250px] bg-zinc-700 rounded-lg overflow-hidden">
                <img className="h-[60%] w-full object-cover " src={imageUrl} alt="" />
                <div className="h-[40%] w-full text-white p-3">
                    <h1 className="font-bold text-[20px]">{name}</h1>
                    <h1 className="text-md font-bold text-zinc-400">
                        Price: <span className='text-white'>{price}</span>
                    </h1>
                    <h1 className="text-1xs truncate">{des}</h1>
                </div>
            </div>
        </div>
    )
}
