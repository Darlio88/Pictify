import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'


//styles
import {InputContainer, Input, InputHeader, OuterContainer, Button} from './styles'

const Index = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
 
  const handleSubmit =() =>{
   try {
     console.log({ email, password})
     axios.post('http://localhost:4000/api/users/signin',{ email, password}).then(res=>{
      console.log(res.data)
      localStorage.setItem('user', JSON.stringify(res.data))
     }).catch(err=>{
       console.log(err)
     })
   } catch (err){
 
   }
  }

  return (
    <OuterContainer>
    <InputContainer>
    <InputHeader>Sign in</InputHeader>
    <Input value={email} onChange={(e)=>setEmail(e.target.value)} type='email' placeholder='Email' />
    <Input value={password} onChange={(e)=>setPassword(e.target.value)}  placeholder='Password' type='password' />
    <Button onClick={handleSubmit}>Signin</Button>
    <span>Do not have an account yet? <Link style={{cursor:'pointer', color:"#1d3557"}} to='/signup'>Signup</Link></span>
    </InputContainer>
    </OuterContainer>
  )
}

export default Index