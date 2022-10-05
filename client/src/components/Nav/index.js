import React, {useState, useEffect, useRef} from 'react'
import {Link} from 'react-router-dom'

//styles
import { NavContainer, NavContainerLeft, NavContainerRight, NavLinks,SlideMenuToggler,NavContainerSide} from './styles'
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
    localStorage.clear()
  }
  return (
    <>
    <NavContainer>
      <NavContainerLeft>
         <img src={LogoWhite} alt='logo' style={{width:120}} />
      </NavContainerLeft>
      <NavContainerRight >
          <NavLinks>Home</NavLinks>
          <NavLinks>Create</NavLinks>
          <NavLinks>About</NavLinks>
          <NavLinks>Logout</NavLinks>
      </NavContainerRight>
      <SlideMenuToggler onClick={navToggler}>
      {!navActive && <FaChevronCircleLeft size={24} />}
      {navActive && <FiXCircle size={24} />}
      </SlideMenuToggler>
    </NavContainer>
{navActive && ( <NavContainerSide>
          <Link to='/'><NavLinks>Home</NavLinks></Link>
          <Link to='/create-post'><NavLinks>Home</NavLinks></Link>
          <NavLinks>About</NavLinks>
         {user && <NavLinks onClick={handleLogout}>Logout</NavLinks>}
    </NavContainerSide>)}
    </>
  )
}

export default Index