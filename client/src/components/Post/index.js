import axios from 'axios'
import React, {useState, useEffect} from 'react'
import {Image, Video, Transformation} from 'cloudinary-react';
//icons
import {AiOutlineHeart} from 'react-icons/ai'
//styles
import { PostContainer, PostImage, Lower, Upper, PostCreator, PostDetailsContainer } from './styles'

//api
import { baseUrl } from '../../utils/api';

const Index = ({post}) => {

  const [user, setUser] = useState('')
  const loggedInUser = JSON.parse(localStorage.getItem('user'))
useEffect(() => {
  baseUrl.get(`/api/users/user?id=${post.createdBy}`).then(res=>{
    setUser(res.data.userName)
  }).catch(err=>console.log(err))
}, [post.createdBy])


const handleLiked = ()=>{
  if(loggedInUser){
    baseUrl.patch(`/api/posts/${post._id}`).then(res=>{
console.log(res.data)
    }).catch(err=>console.log(err))
  }
}

const handleDelete = ()=>{
  if(loggedInUser){
    baseUrl.delete(`/api/posts/${post._id}`, {userId:loggedInUser?._id}).then(res=>{
console.log(res.data)
    }).catch(err=>console.log(err))
  }
}

  return (
    <PostContainer>
      <Image
          cloudName="expert-shire"
          publicId={post.postImage}
          width="300"
          crop="scale"
      />
        <PostDetailsContainer>
          <Upper >
            <PostCreator>{user}</PostCreator>
            <button disabled={loggedInUser?false:true}  className='flex space-x-1 items-center' onClick={handleLiked}>
            <AiOutlineHeart /> <small>{post.likes.length}</small>
            </button>
        </Upper>
        <Lower>
   {  (loggedInUser._id === post.createdBy) && <button 
   onClick={handleDelete}
    className='rounded-lg px-2 py-1 my-1' style={{backgroundColor:'red'}}>
            DELETE
          </button>}
        </Lower>
        </PostDetailsContainer>
        
    </PostContainer>
  )
}

export default Index