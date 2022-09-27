import styled from 'styled-components'

import tw from 'twin.macro'
export const OuterContainer = styled.div`
  ${tw`flex items-center justify-center w-screen h-screen`}`

export const InputContainer = styled.div` 
max-width: 700px;
background-color:#a8dadc;
min-width:320px;
margin: 0 auto;
${tw`px-2 space-y-3 pb-10 py-2 flex flex-col justify-center items-center rounded-lg`}
`

export const InputHeader = styled.h1`
    font-weight:bold;
    ${tw`text-lg font-bold md:font-extrabold uppercase`}
    `

export const Input = styled.input` 
${tw`rounded-md py-2 px-2 border w-10/12 md:w-11/12 `}
`

export const Button = styled.button`
background-color:#52b788;
color:#081c15
transition: all 2s linear;
&:hover{
    color:#52b788;
    transform:scale(1.1);
    background-color:#081c15;  
}
${tw`uppercase font-semibold shadow-lg px-4 py-2 rounded-lg`}
   ` 