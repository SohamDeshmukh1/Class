import React from 'react'

export default function () {
  return (
    <div className='border-t border-white p-4'>
         <div className="container mx-auto">
        <p className="mb-2">© 2024 Your Company. All rights reserved.</p>
        <p>
          Follow us on 
          <a href="https://twitter.com" className="text-blue-400 hover:text-blue-600 mx-1">Twitter</a>, 
          <a href="https://facebook.com" className="text-blue-600 hover:text-blue-800 mx-1">Facebook</a>, and 
          <a href="https://instagram.com" className="text-pink-400 hover:text-pink-600 mx-1">Instagram</a>.
        </p>
      </div>
    </div>
  )
}
