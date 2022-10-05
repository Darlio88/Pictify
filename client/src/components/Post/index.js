import axios from 'axios'
import React, {useState, useEffect} from 'react'
import {Image, Video, Transformation} from 'cloudinary-react';
//icons
import {AiOutlineHeart} from 'react-icons/ai'
//styles
import { PostContainer, PostImage, PostCreator, PostDetailsContainer } from './styles'

const Index = ({post}) => {
  const [user, setUser] = useState('')
useEffect(() => {
  axios.get(`http://178.79.132.139:4000/api/users/single-user?id=${post.createdBy}`).then(res=>{
    setUser(res.data.userName)
    console.log(res.data)
  }).catch(err=>console.log(err))
}, [post.createdBy])

  return (
    <PostContainer>
      <Image cloudName="Expert shire" publicId={post.postImage}>
      <Transformation crop="scale" width="280" angle="10" />
     </Image>
        <PostDetailsContainer>
        <PostCreator>{user}</PostCreator>
        <AiOutlineHeart />
        </PostDetailsContainer>
    </PostContainer>
  )
}

export default Index