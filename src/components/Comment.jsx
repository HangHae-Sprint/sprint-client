import React, { useState } from "react";
import * as CSS from "../components/component/style";
import { writeComment, deleteComment } from "../axios/api";
import Button from "./component/Button";

const Comment = (props) => {
  const [comment, setComment] = useState("");

  const handleWriteComment = () => {
    const commentData = {
      content: comment,
      username: "user123", // Replace with the actual user who wrote the comment
      nickname: "nickname", // Replace with the actual user's nickname
    };
  };

  const handleDeleteComment = (commentId) => {
    deleteComment(props.sprintId, commentId);
  };

  return (
    <>
      <CSS.CommentSection>
        <CSS.CommentForm onSubmit={(e) => e.preventDefault()}>
          <CSS.CommentInput
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="댓글을 입력해주세요."
          />
          <CSS.CommentButtonBox>
            <Button size="80" type="positive" onClick={handleWriteComment}>
              등록
            </Button>
          </CSS.CommentButtonBox>
        </CSS.CommentForm>

        {props.commentList.map((item) => {
          return (
            <CSS.CommentBox key={item.id}>
              <CSS.CommentTitle>
                {item.nickname} | {item.createdAt}
              </CSS.CommentTitle>
              <CSS.CommentContent>{item.comment}</CSS.CommentContent>
              {item.user === "user123" && (
                <CSS.CommentButton>
                  <CSS.CommentButton
                    onClick={() => handleDeleteComment(item.id)}
                  >
                    삭제
                  </CSS.CommentButton>
                </CSS.CommentButton>
              )}
            </CSS.CommentBox>
          );
        })}
      </CSS.CommentSection>
    </>
  );
};

export default Comment;
