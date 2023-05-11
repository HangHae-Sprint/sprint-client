import React, { useEffect, useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { isLikePost } from "../axios/api";
import * as CSS from "../components/component/style";

const IsLike = (props) => {
  //리액트 쿼리 관련
  const queryClient = useQueryClient();
  const [Liked, setLiked] = useState(props.data.isLiked);
  const mutation = useMutation(isLikePost, {
    onSuccess: () => {
      queryClient.invalidateQueries("allSprint")
      queryClient.invalidateQueries("detailSprint")

    },
  });
  useEffect(()=>{
    setLiked(props.data.isLiked)
  },[props.data])
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
