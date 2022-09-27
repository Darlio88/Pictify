import React from 'react'
//icons
import {AiOutlineHeart} from 'react-icons/ai'
//styles
import { PostContainer, PostImage, PostCreator, PostDetailsContainer } from './styles'

const Index = ({post}) => {
  return (
    <PostContainer>
        <PostImage src={post.postImage} alt={post.name}/>
        <PostDetailsContainer>
        <PostCreator>{post.createdBy}</PostCreator>
        <AiOutlineHeart />
        </PostDetailsContainer>
        
    </PostContainer>
  )
}

export default Index