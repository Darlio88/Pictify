import React, {useState} from 'react'


//styles
import { NavContainer, NavLink, NavContainerLeft, NavContainerRight, NavLinks,SlideMenuToggler,NavContainerSide} from './styles'
//icons
import {FaChevronCircleLeft} from 'react-icons/fa'
import {FiXCircle} from 'react-icons/fi'



//logo import 
import LogoWhite from '../../assets/logo-white.png'

const Index = () => {
  const user = JSON.parse(localStorage.getItem('user'))
  const [navActive, setNavActive] = useState(false)
  const navToggler = () =>{
    setNavActive((curr)=>!curr)
  }
  const handleLogout = () =>{
    localStorage.removeItem('user')
  }
  function LogoutAndToggle(){
    handleLogout()
    navToggler()
  }
  return (
    <>
    <NavContainer>
      <NavContainerLeft>
         <img src={LogoWhite} alt='logo' style={{width:120}} />
      </NavContainerLeft>
      <NavContainerRight >
      <NavLinks to='/' >Home</NavLinks>
      <NavLinks to='/create-post' >Create post</NavLinks>
      {!user && <NavLinks to='/signin' >Login</NavLinks>}
      <NavLink  rel="noreferrer" href='https://github.com/Darlio88'  target='_blank'>About</NavLink>
          {user && <NavLinks  onClick={handleLogout} >Logout</NavLinks>}
      </NavContainerRight>
      <SlideMenuToggler onClick={navToggler}>
      {!navActive && <FaChevronCircleLeft size={24} />}
      {navActive && <FiXCircle size={24} />}
      </SlideMenuToggler>
    </NavContainer>
{navActive && ( <NavContainerSide>
          <NavLinks to='/' onClick={navToggler}>Home</NavLinks>
          <NavLinks to='/create-post' onClick={navToggler}>Create post</NavLinks>
          {!user && <NavLinks to='/signin' onClick={navToggler}>Login</NavLinks>}
          <NavLink onClick={navToggler} rel="noreferrer" href='https://github.com/Darlio88'  target='_blank'>About</NavLink>
         {user && <NavLinks  onClick={LogoutAndToggle} >Logout</NavLinks>}
    </NavContainerSide>)}
    </>
  )
}

export default Index