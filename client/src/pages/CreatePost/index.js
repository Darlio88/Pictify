import React, {useState} from 'react'
import {useNavigate} from "react-router-dom"
//styles
import {PostContainer, PostForm, ImageHolder, Button} from './styles'

//api
import { baseUrl } from '../../utils/api'
const Index = () => {
  const navigate = useNavigate()
  const [encodedFile, setEncodedFile] = useState('')
   const user = JSON.parse(localStorage.getItem('user'))
  const fileEncoder = (file) =>{
  const reader = new FileReader()
  reader.readAsDataURL(file)
  reader.onloadend=()=>setEncodedFile(reader.result)
}


  const handleFileChange =(e) =>{
    const file = e.target.files[0]
    fileEncoder(file)
  }


  const handleSubmission =(e) =>{
  e.preventDefault()
  if(!encodedFile) return;
   try {
    baseUrl.post('/api/posts/create', {postImage:encodedFile, createdBy:user._id}).then(res=>{
      navigate('/')
    }).catch(err=>{
      console.log(err)
    })

   } catch (error) {
    console.error(error);
   }
  }


  return (
    <PostContainer>
      <PostForm>
        {encodedFile && <ImageHolder>
          <img src={encodedFile} alt='file-preview' style={{maxHeight:300}} />
          </ImageHolder>}
        <form onSubmit={handleSubmission} className='space-y-2'>
          <input  type='file' placeholder='choose file' onChange={handleFileChange} />
          <Button type='submit' >POST</Button>
        </form>
     </PostForm>
    </PostContainer>
  )
}


export default Index