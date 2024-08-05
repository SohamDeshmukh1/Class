import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';

function UserInfo() {
    const navigate = useNavigate()
  const { username } = useParams();

    return (
      <div className="flex">
        <div className="flex flex-col gap-3">
          <h1 className="text-3xl font-bold">User Details</h1>
          <h1 className="font-bold">
            Hii, <span className='text-red-400'>{username}</span>
          </h1>
          <button
            onClick={() => navigate(-1)}
            className="bg-red-400 h-fit w-fit p-1 px-2"
          >
            Go Back
          </button>
        </div>
      </div>
    );
}

export default UserInfo
