import React, { useState } from "react";
import * as CSS from "../components/component/style";
import { writeComment, deleteComment } from "../axios/api";

const Comment = (props) => {
  const data = props.commentList;

  const [commentList, setCommentList] = useState("");
  const [editingCommentId, setEditingCommentId] = useState("");

  const handleWriteComment = () => {
    const commentData = {
      content: commentList,
      username: "user123", // Replace with the actual user who wrote the comment
      nickname: props.sprintId,
    };
    writeComment(commentData)
      .then((newComment) => {
        // Handle the newly created comment
        setCommentList("");
      })
      .catch((error) => {
        throw new Error(error.message);
      });
  };

  const handleEditComment = (commentId) => {
    const commentData = {
      content: commentList,
      user: "user123", // Replace with the actual user who wrote the comment
      sprintId: props.sprintId,
    };
    updateComment(commentId, commentData)
      .then((updatedComment) => {
        // Handle the updated comment
        setEditingCommentId("");
        setCommentList("");
      })
      .catch((error) => {
        throw new Error(error.message);
      });
  };

  const handleDeleteComment = (commentId) => {
    deleteComment(commentId)
      .then(() => {
        // Handle the successful deletion of the comment
      })
      .catch((error) => {
        throw new Error(error.message);
      });
  };

  return (
    <>
      <CSS.CommentSection>
        <CSS.CommentForm onSubmit={(e) => e.preventDefault()}>
          <CSS.CommentInput
            value={commentContent}
            onChange={(e) => setCommentContent(e.target.value)}
            placeholder="댓글을 입력해주세요."
          />
          <CSS.CommentFormButtonBox>
            {editingCommentId ? (
              <>
                <CSS.CommentFormButton
                  onClick={() => handleEditComment(editingCommentId)}
                >
                  수정 완료
                </CSS.CommentFormButton>
                <CSS.CommentFormButton onClick={() => setEditingCommentId("")}>
                  취소
                </CSS.CommentFormButton>
              </>
            ) : (
              <CSS.CommentFormButton onClick={handleCreateComment}>
                등록
              </CSS.CommentFormButton>
            )}
          </CSS.CommentFormButtonBox>
        </CSS.CommentForm>

        {data.map((item) => {
          return (
            <CSS.CommentBox key={item.id}>
              <CSS.CommentTitle>
                {item.nickname} | {item.createdAt}
              </CSS.CommentTitle>
              {editingCommentId === item.id ? (
                <CSS.CommentContentInput
                  value={commentContent}
                  onChange={(e) => setCommentList(e.target.value)}
                />
              ) : (
                <CSS.CommentContent>{item.comment}</CSS.CommentContent>
              )}
              {item.user === "user123" && (
                <CSS.CommentButtons>
                  {editingCommentId !== item.id ? (
                    <CSS.CommentButton
                      onClick={() => setEditingCommentId(item.id)}
                    >
                      수정
                    </CSS.CommentButton>
                  ) : (
                    <CSS.CommentButton onClick={() => setEditingCommentId("")}>
                      취소
                    </CSS.CommentButton>
                  )}
                  <CSS.CommentButton
                    onClick={() => handleDeleteComment(item.id)}
                  >
                    삭제
                  </CSS.CommentButton>
                </CSS.CommentButtons>
              )}
            </CSS.CommentBox>
          );
        })}
      </CSS.CommentSection>
    </>
  );
};

export default Comment;
