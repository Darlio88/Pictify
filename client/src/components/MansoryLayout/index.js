import Mansory from 'react-masonry-css'
import React , {useEffect, useState} from 'react'
import axios from 'axios'

import  Post from '../Post';

//api
import { baseUrl } from '../../utils/api';

const breakpointColumnsObj = {
    default: 4,
    3000: 5,
    2000: 4,
    1200: 3,
    1000: 2,
    500: 1,
  };
  
  const Index = () => {
    const [posts, setPosts] = useState([])
    
    useEffect(()=>{
     baseUrl.get('/api/posts').then((response)=>{
     
      setPosts(response.data)
     }).catch(err=>{
      console.log(err.message)

     })
    },[])
    return (
      <Mansory className="flex animate-slide-fwd md:px-0 px-3 mt-14 md:mt-16 md:space-x-8" breakpointCols={breakpointColumnsObj}>
         {posts.map((post, idx)=>(<Post key={idx} post={post} />))}
      </Mansory>
    )
  }
  
  export default Index