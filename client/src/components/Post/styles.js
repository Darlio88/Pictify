import styled from "styled-components";
import tw from 'twin.macro'


export const PostContainer = styled.div`
    &:hover{
        transform: scale(1.01);
        border-radius: .125rem;
        overflow:hidden;
    }
    ${tw`relative w-max my-2`}
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

${tw`w-full flex justify-between items-end `}
`
export const Upper = styled.div`
${tw`w-full flex justify-between`}
`
export const TimeText = styled.h6`
text-align:start;
${tw`italic text-xs`}
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
    opacity:0.6;
}
opacity:0;
transition: cubic-bezier(0.075, 0.82, 0.165, 1);
align-items:space-between;
justify-content:space-between;
${tw`absolute flex  flex-col rounded-md py-1  px-2 `}
`

export const LikeButton = styled.button`
${tw`flex space-x-1 items-center`}
`

