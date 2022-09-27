

import styled from 'styled-components'
import tw from 'twin.macro'


export const PostContainer = styled.div`

${tw`p-2 md:flex md:w-full justify-center md:pt-5`} 


`
export const PostForm = styled.div` 
${tw`space-y-2`}
`
export const Image = styled.image`
${tw`overflow-hidden`}
`
export const ImageHolder = styled.div`
 ${tw` rounded-lg overflow-hidden`}
`;

export const Button = styled.button`
background-color:#52b788;
color:#081c15
transition: all 2s linear;
&:hover{
    color:#52b788;
    transform:scale(1.1);
    background-color:#081c15;  
}
${tw`uppercase font-semibold shadow-lg px-2 py-2 w-full rounded-lg`}
   ` 
