import React from "react";
import * as CSS from "../components/component/style";
import Comment from "./Comment";
import Button from "./component/Button";
import Header from "./Header";
import SupportStatus from "./SupportStatus";

import { useState } from "react";
import { useMutation, useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { deleteSprint, detailSprint } from "../axios/api";
import ApplyModal from "./ApplyModal";
import DetailModify from "./DetailModify";
import IsLike from "./IsLike";

const Detail = () => {
  const params = useParams();

  const navigate= useNavigate()
  const mutation = useMutation(deleteSprint, {
    onSuccess: () => {
      alert("삭제성공");
      navigate('/main')
    },
  });


  const [modify, setModify] = useState(false);
  const [apply, setApply] = useState(false);

  const applyButtonHandler = () => {
    setApply(!apply);
  };
  const { isLoading, isError, data } = useQuery("detailSprint", () =>
    detailSprint(params.id)
  );
  console.log('data:',data)
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {Error.message}</div>;

  const deleteOnClickButtonHandler = (id) => {
    mutation.mutate(id)
  }

  const onClickModifyHandler = () => {
    setModify(!modify);
  };

  return (
    <>
      <Header />
      <CSS.Main>
        {!modify && (
          <article>
            <CSS.DetailSection>
              <CSS.DetailTitle>
                {data.title}
                <SupportStatus
                  nickname={data.nickname}
                  fieldObjectList={data.fieldObjectList}
                />
              </CSS.DetailTitle>
              <CSS.ApplyButtonBox>
                <Button size="180" type="positive" onClick={applyButtonHandler}>
                  신청하기
                </Button>
                {apply && (
                  <ApplyModal data={data} apply={apply} setApply={setApply} />
                )}
              </CSS.ApplyButtonBox>
            </CSS.DetailSection>

            <CSS.DetailContent>{data.content}</CSS.DetailContent>
            <CSS.DetailEdit>
              <CSS.DetailLike>
                <IsLike data={data} />

                <CSS.Like>좋아요 {data.numLikes} 개</CSS.Like>
              </CSS.DetailLike>

              {data.isMySprint && (
                <CSS.DetailButtonBox>
                  <Button
                    size="80"
                    type={"positive"}
                    onClick={onClickModifyHandler}
                  >
                    수정
                  </Button>
                  <Button 
                  onClick={()=>deleteOnClickButtonHandler(data.sprintId)}
                  size="80" type={"negative"}>
                    삭제
                  </Button>
                </CSS.DetailButtonBox>
              )}
            </CSS.DetailEdit>
          </article>
        )}
        {modify && (
          <DetailModify data={data} modify={modify} setModify={setModify} />
        )}
        <section>
          <Comment data={data} />
        </section>
      </CSS.Main>
    </>
  );
};

export default Detail;
