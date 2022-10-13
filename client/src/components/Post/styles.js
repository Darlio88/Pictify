import styled from "styled-components";
import tw from 'twin.macro'


export const PostContainer = styled.div`
    
    ${tw`relative w-max  p-1 pr-2 pt-2 pb-2`}
    `

export const PostImage = styled.img`

width:240px;
@media (max-width: 700px){
    width:300px;
}
${tw`rounded-lg`}
`

export const PostCreator = styled.h6`


`
export const Lower = styled.div`

${tw`w-full flex justify-end items-end `}
`
export const Upper = styled.div`
${tw`w-full flex justify-between`}
`


export const PostDetailsContainer = styled.div` 
color:#f1faee;
background-color:#457b9d;
top:0;
right:0;
left:0;
bottom:0;
z-index:1;
&:hover{
    opacity:0.8;
}
opacity:0;
transition: all 2s ease 1s;
align-items:space-between;
justify-content:space-between;
${tw`absolute flex  flex-col rounded-md py-1  px-2 mx-2 my-2`}
`