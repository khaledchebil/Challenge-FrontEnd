import React, { useEffect, useState } from 'react'
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../App.css';

const User = ({match}) => {
const [post, setPost] = useState({})

const url ='https://jsonplaceholder.typicode.com/posts/?id='+match.params.id;
useEffect(() => {
    fetch(url)
    .then(response => response.json())
    .then(response => setPost(response[0]))
}, [url])

const [users, setUsers] = useState([]);
const urls = 'https://jsonplaceholder.typicode.com/users/?id='+match.params.id;
useEffect(() => {
    fetch(urls)
    .then(response => response.json())
    .then(response => setUsers(response[0]))
    }, [])


return (
<div className='tc'>
    <span>User Name:</span> <h3>{users.name}</h3>
    <span>Post Title:</span> <h3>{post.title}</h3>
    <span>Post :</span> <h3>{post.body}</h3>

  <Card>

  <Card.Body>   
  <Link  to ='/user'>
  <Button className='btnn' variant="primary">Back</Button>
  </Link>
    <Link  to ={`/user/${users.id}/comment/${post.id}`}>
  <Button variant="primary">check comment</Button>
  </Link>
  </Card.Body>
</Card>


</div>
)
}

export default User
