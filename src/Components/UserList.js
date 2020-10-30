import React from 'react'
import { useSelector } from 'react-redux'
import UserCard from './UserCard'
import '../App.css';
import { Link } from 'react-router-dom';


export const UserList = () => {
const Users = useSelector(state => state.users)
    return (
        <div className='crd bg-orange'>
            {
                Users.map((user) => (
                    <Link className='linkcard'  to ={`user/${user.id}`}>
                    <UserCard user={user} key={user.id} />
                    </Link>
                    ))
            }
        </div>
    )
}
