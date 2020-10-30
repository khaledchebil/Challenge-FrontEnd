import React from 'react'
import '../App.css';

const UserCard = ({user}) => {
    return (
        <div className='flex  '>
     <div className='insidecard'>
           <h3>{user.name}</h3>
      <p>{user.email}</p>
        </div>
        </div>
    )
}

export default UserCard
