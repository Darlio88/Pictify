import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'
//styles
import {InputContainer, Input, InputHeader, OuterContainer, Button} from './styles'

//api
import { baseUrl } from '../../utils/api'
const Index = () => {
 const [userName, setUserName] = useState('')
 const [email, setEmail] = useState('')
 const [password, setPassword] = useState('')
const navigate = useNavigate()
 const handleSubmit =() =>{
  try {
    console.log({userName, email, password})
    baseUrl.post('/api/users/signup',{userName, email, password}).then(res=>{
    //  console.log(res.data)
     localStorage.setItem('user', JSON.stringify(res.data))
     navigate('/')
    }).catch(err=>{
      console.log(err)
    })
  } catch (err){

  }
 }
  return (
    <OuterContainer>
    <InputContainer>
    <InputHeader>Sign up</InputHeader>
    <Input value={userName} onChange={(e)=>setUserName(e.target.value)} type='text' placeholder='userName' />
    <Input value={email} onChange={(e)=>setEmail(e.target.value)} type='email' placeholder='Email' />
    <Input value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Password' type='password' />
    <Button onClick={handleSubmit}>Signup</Button>
    <span>Already have an account yet? <Link style={{cursor:'pointer', color:"#1d3557"}} to='/signin'>Signin</Link></span>
    </InputContainer>
    </OuterContainer>
  )
}

export default Index