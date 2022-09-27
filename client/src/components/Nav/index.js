import React, {useState, useEffect, useRef} from 'react'


//styles
import { NavContainer, NavContainerLeft, NavContainerRight, NavLinks,SlideMenuToggler,NavContainerSide} from './styles'
//icons
import {FaChevronCircleLeft} from 'react-icons/fa'
import {FiXCircle} from 'react-icons/fi'



//logo import 
import LogoWhite from '../../assets/logo-white.png'

const Index = () => {
  const [navActive, setNavActive] = useState(false)
  const navToggler = () =>{
    setNavActive((curr)=>!curr)
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
          <NavLinks>Home</NavLinks>
          <NavLinks>Create</NavLinks>
          <NavLinks>About</NavLinks>
          <NavLinks>Logout</NavLinks>
    </NavContainerSide>)}
    </>
  )
}

export default Index