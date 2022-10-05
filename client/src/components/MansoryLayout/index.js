import Mansory from 'react-masonry-css'
import React , {useEffect, useState} from 'react'
import axios from 'axios'

import  Post from '../Post';

const breakpointColumnsObj = {
    default: 4,
    3000: 6,
    2000: 5,
    1200: 3,
    1000: 2,
    500: 1,
  };
  
  const Index = () => {
    const [posts, setPosts] = useState([])
    
    useEffect(()=>{
     axios.get('http://178.79.132.139:4000/api/posts').then((response)=>{
      console.log(response.data)
      setPosts(response.data)
     }).catch(err=>{
      console.log(err.message)

     })
    },[])
    return (
      <Mansory className="flex animate-slide-fwd mt-10 " breakpointCols={breakpointColumnsObj}>
         {posts.map((post, idx)=>(<Post key={idx} post={post} />))}
      </Mansory>
    )
  }
  
  export default Index