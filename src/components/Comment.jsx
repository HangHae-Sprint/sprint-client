import React, { useState } from "react";
import * as CSS from "../components/component/style";
import { deleteComment, writeComment } from "../axios/api";
import axios from "axios";
import { useEffect } from "react";
import Button from "./component/Button";
import { useMutation } from "react-query";
import useInput from "./Hooks/useInput";

function CommentList(props) {
  const data = props.data.commentList
  const [content, setContent] = useState('')
  const handleContentChange = (e)=>{
    setContent(e.target.value)
  }
  const mutation = useMutation(writeComment,{
    onSuccess: (data) =>{
      alert('댓글 저장 성공')
    },
    onError:(error)=>{
      alert('댓글 저장 실패')
    }
})
const deleteMutation = useMutation(deleteComment,{
  onSuccess: (data) =>{
    alert('삭제 성공')
  },
  onError:(error)=>{
    alert('삭제 실패')
  }
})

  const newPost = {
    sprintId:props.data.sprintId,
    content,
  }

  const handleNewCommentSubmit = () => {
    mutation.mutate(newPost)
    setContent('')

  };

  const handleDeleteComment = (commentId) => {
    const newDeleteId = {
      commentId,
      sprintId:props.data.sprintId
    }
    deleteMutation.mutate(newDeleteId)
  };



  return (
    <>
      <CSS.CommentSection>
        <CSS.commentListBox>
        <CSS.CommentForm onSubmit={(e) => e.preventDefault()}>
          <CSS.CommentInput
            type="text"
            value={content}
            onChange={handleContentChange}
            placeholder="댓글을 입력해주세요."
          />
          <CSS.CommentButtonBox>
            <Button size="80" type="positive" onClick={handleNewCommentSubmit}>
              등록
            </Button>
          </CSS.CommentButtonBox>
        </CSS.CommentForm>
        <CSS.CommentForm onSubmit={(e) => e.preventDefault()}>
            <div>
            {data.map((item)=>{
              return(
              <CSS.CommentBox key={item.commentId} >
              <div>
              <CSS.CommentTitle>{item.nickname}</CSS.CommentTitle>

              <CSS.CommentContent>{item.content}</CSS.CommentContent>
              </div>
              <CSS.CommentButtonBox>

              {item.isMyComment &&<Button
                size="80"
                type="negative"
                onClick={()=>handleDeleteComment(item.commentId)}
              >
              삭제
              </Button>}

          </CSS.CommentButtonBox>

            </CSS.CommentBox>)})}
            </div>
            </CSS.CommentForm>
            </CSS.commentListBox>
      </CSS.CommentSection>
    </>
  );
}

export default CommentList;
