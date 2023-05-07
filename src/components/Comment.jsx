import React from 'react'

const Comment = (props) => {
  const data = props.commentList

  return (
    <>
    {data.map((item)=>{
      return(
        <div>
        <div>{item.commentNickname}</div>
        <div>{item.commentContent}</div>
        </div>
      )
    })}
    </>
  )
}

export default Comment