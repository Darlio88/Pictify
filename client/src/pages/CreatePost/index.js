import React, {useState, useEffect} from 'react'
import axios from 'axios'
//styles
import {PostContainer, PostForm, ImageHolder, Button} from './styles'

const Index = () => {
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
   console.log(encodedFile)
   if(!user) return alert("login to create a post")
   try {
    axios.post('http://localhost:4000/api/posts/create-post', {postImage:encodedFile, createdBy:user._id}).then(res=>{
      console.log(res.data)
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
          <Button type='submit' >Submit</Button>
        </form>
     </PostForm>
    </PostContainer>
  )
}


export default Index