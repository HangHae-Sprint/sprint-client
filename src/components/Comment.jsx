import React, { useState } from "react";
import * as CSS from "../components/component/style";
import { writeComment, deleteComment } from "../axios/api";

const Comment = (props) => {
  const data = props.commentList;

  const [commentList, setCommentList] = useState("");
  const [editingCommentId, setEditingCommentId] = useState("");

  // 댓글 추가하기 핸들러
  const handleWriteComment = () => {
    const commentData = {
      content: commentList,
      username: "user123", // Replace with the actual user who wrote the comment
      nickname: props.sprintId,
    };
    writeComment(commentData)
      .then((commentData) => {
        setCommentList("");
      })
      .catch((error) => {
        throw new Error(error.message);
      });
  };

  // //댓글 수정하기 핸들러
  // const handleEditComment = (commentId) => {
  //   const commentData = {
  //     content: commentList,
  //     user: "user123",
  //     sprintId: props.sprintId,
  //   };
  //   updateComment(commentId, commentData)
  //     .then((updatedComment) => {
  //       setEditingCommentId("");
  //       setCommentList("");
  //     })
  //     .catch((error) => {
  //       throw new Error(error.message);
  //     });
  // };

  //댓글 삭제하기 핸들러
  const handleDeleteComment = (commentId) => {
    deleteComment(commentId)
      .then(() => {})
      .catch((error) => {
        throw new Error(error.message);
      });
  };

  return (
    <>
      <CSS.CommentSection>
        <CSS.CommentForm onSubmit={(e) => e.preventDefault()}>
          <CSS.CommentInput
            value={commentList}
            onChange={(e) => setCommentList(e.target.value)}
            placeholder="댓글을 입력해주세요."
          />
          <CSS.CommentButtonBox>
            {editingCommentId ? (
              <>
                {/* <CSS.CommentButton
                  onClick={() => handleEditComment(editingCommentId)}
                >
                  수정 완료
                </CSS.CommentButton> */}
                <CSS.CommentButton onClick={() => setEditingCommentId("")}>
                  취소
                </CSS.CommentButton>
              </>
            ) : (
              <CSS.CommentButton onClick={handleWriteComment}>
                등록
              </CSS.CommentButton>
            )}
          </CSS.CommentButtonBox>
        </CSS.CommentForm>

        {data.map((item) => {
          return (
            <CSS.CommentBox key={item.id}>
              <CSS.CommentTitle>
                {item.nickname} | {item.createdAt}
              </CSS.CommentTitle>
              {editingCommentId === item.id ? (
                <CSS.CommentContentInput
                  value={commentList}
                  onChange={(e) => setCommentList(e.target.value)}
                />
              ) : (
                <CSS.CommentContent>{item.comment}</CSS.CommentContent>
              )}
              {item.user === "user123" && (
                <CSS.CommentButton>
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
