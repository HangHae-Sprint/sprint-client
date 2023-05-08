import React from 'react'
import * as CSS from '../components/component/style'


const Comment = (props) => {
  const data = props.commentList

  return (
    <>
    <CSS.CommentSection>
    {data.map((item)=>{
      return(
        <CSS.CommentBox key={item.id}>
        <CSS.CommentTitle>{item.nickname} | {item.createdAt}</CSS.CommentTitle>
        <CSS.CommentContent>{item.comment}</CSS.CommentContent>
        </CSS.CommentBox>
      )
    })}
    </CSS.CommentSection>
    </>
  )
}

export default Comment