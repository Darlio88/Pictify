import axios from 'axios'
import React, {useState, useEffect} from 'react'
//icons
import {AiOutlineHeart} from 'react-icons/ai'
//styles
import { PostContainer, PostImage, PostCreator, PostDetailsContainer } from './styles'

const Index = ({post}) => {
  const [user, setUser] = useState('')
useEffect(() => {
  axios.get(`http://localhost:4000/api/users/single-user?id=${post.createdBy}`).then(res=>{
    setUser(res.data.userName)
    console.log(res.data)
  }).catch(err=>console.log(err))
}, [post.createdBy])

  return (
    <PostContainer>
        <PostImage src={post.postImage} alt={post.name}/>
        <PostDetailsContainer>
        <PostCreator>{user}</PostCreator>
        <AiOutlineHeart />
        </PostDetailsContainer>
    </PostContainer>
  )
}

export default Index