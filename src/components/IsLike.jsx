import React, { useState } from 'react'
import * as CSS from '../components/component/style'


const IsLike = () => {
  const [Liked,setLiked]= useState(true)
  

    const isLikeHandler = ()=>{
    setLiked(!Liked)
  }
  return (
    <>
    {Liked ? 
      <CSS.Heart onClick={isLikeHandler}/>:<CSS.BeanHeart onClick={isLikeHandler}/>} 
    </>
  )
}

export default IsLike