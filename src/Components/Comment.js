import React from 'react'
import { useState, useEffect } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Comment = ({match}) => {

const [post, setPost] = useState({})
const url ='https://jsonplaceholder.typicode.com/posts/?id='+match.params.id;
useEffect(() => {
    fetch(url)
    .then(response => response.json())
    .then(response => setPost(response[0]))
}, [url])

const [comment, setComment] = useState({})
const url2 ='https://jsonplaceholder.typicode.com/comments/?id='+match.params.id;
useEffect(() => {
    fetch(url2)
    .then(response => response.json())
    .then(response => setComment(response[0]))
}, [url])



    return (
        <div className='navbb'>
            <span>Post Title:</span> <h3>{post.title}</h3>
            <span>Post :</span> <h3>{post.body}</h3>
            <span>Comment: </span> <h4>{comment.body} </h4> 

<Card>
    <Card.Body>   
        <Link  to ='/user'>
        <Button className='btnn' variant="primary">Back</Button>
        </Link>
        <Link  to ='/'>
        <Button variant="primary">Home</Button>
        </Link>
    </Card.Body>
</Card>
        </div>
    )
}

export default Comment
