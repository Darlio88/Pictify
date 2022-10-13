import styled from 'styled-components'
import tw from 'twin.macro'
import {Link} from 'react-router-dom'

export const NavContainer = styled.nav`
min-height: 48px;
z-index: 10;
position:fixed;
top:0;
right:0;
left:0;
flex:1;

background-color:#457b9d;
${tw`flex items-center justify-between py-2 px-2`}
  ` 
  export const NavContainerLeft = styled.div`
flex:3;
${tw`md:flex items-center justify-between`}
  ` 



export const NavContainerRight = styled.div`
  flex:3;
 

  ${tw`hidden md:flex items-center  md:justify-around`}
    ` 

    export const NavLinks = styled(Link)`
    color:#f1faee;
    opacity:0.6;
    &:hover{
        opacity:1;
    }
    ${tw`cursor-pointer`}
  `
    export const NavLink = styled.a`
    color:#f1faee;
    opacity:0.6;
    &:hover{
        opacity:1;
    }
    ${tw`cursor-pointer`}
  `
export const NavContainerSide = styled.div`
background-color:#457b9d;
height:100vh;
width:100vw;
position:fixed;
top:58px;
z-index:10;
transition:all 0.5s linear;
${tw`md:hidden flex flex-col items-center justify-center space-y-14 text-lg font-bold`}
`

  export const SlideMenuToggler = styled.div`
  color:#f1faee;
  flex:3;
  ${tw`flex md:hidden justify-end mr-4 items-center`} 
  `