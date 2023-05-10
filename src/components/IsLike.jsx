import React, { useState } from "react";
import { useMutation } from "react-query";
import { isLikePost } from "../axios/api";
import * as CSS from "../components/component/style";

const IsLike = (props) => {
console.log(`props:`,props)
  const [Liked, setLiked] = useState(props.isLiked);

  const mutation = useMutation(isLikePost, {
    onSuccess: () => {
      // queryClient.invalidateQueries("getBoards")
    },
  });

  const isLikeHandler = () => {
    setLiked(!Liked);
    mutation.mutate(props.data.sprintId);
  };
  return (
    <>
      {Liked ? (
        <CSS.Heart onClick={isLikeHandler} />
      ) : (
        <CSS.BeanHeart onClick={isLikeHandler} />
      )}
    </>
  );
};

export default IsLike;
