import styled from "styled-components";
import tw from 'twin.macro'


export const PostContainer = styled.div`
    
    ${tw`relative w-max p-1 pr-2 pt-2 pb-2`}
    `

export const PostImage = styled.img`

width:240px;
@media (max-width: 700px){
    width:300px;
}
${tw`rounded-lg`}
`

export const PostCreator = styled.h6`
align-self:center;

`



export const PostDetailsContainer = styled.div` 
color:#f1faee;
background-color:#457b9d;
top:0;
right:0;
left:0;
z-index:1;
opacity:0.7;
${tw`absolute justify-between rounded-md flex items-center px-1 mx-2 my-2`}
`