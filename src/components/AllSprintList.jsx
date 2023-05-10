import styled from "styled-components";
import { Button } from "./component/style";
import Header from "./Header";
import { Link, useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import { allSprint } from "../axios/api";
import { useState } from "react";
import Cookies from "js-cookie";
import * as CSS from "../components/component/style";
import SupportStatus from "./SupportStatus";
import IsLike from "./IsLike";

const AllSprintList = () => {
  const navigate = useNavigate();

  // const [isVisible, setIsVisible] = useState('')
  //API 연결
  const { isLoading, isError, data } = useQuery("allSprint", allSprint);
  // debugger;
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {Error.message}</div>;

  const detailOpen = (sprintId) => {
    if (!Cookies.get('token')) {
      alert('로그인이 필요합니다.')
      return;
    }

    navigate(`/main/${sprintId}`);
  };

  return (
    <CSS.background>


    <CSS.CardListsMain>
      {data.map((item) => (
        <CSS.contentBox>
        <CSS.SprintBox key={item.sprintId}>
          <CSS.CardTitle> {item.title}</CSS.CardTitle>
          
          <CSS.CardContent>
            <div>
            <div>{` 작성자 : ${item.nickname}`}</div>
            <div>{` 모집 타입 :  ${item.sprintType}`}</div>
            <div>{`좋아요 ${item.numLikes} 개`}</div>
            </div>
            <CSS.CardField>
              <CSS.recruitment>모집인원 : </CSS.recruitment>
              {item.fieldObjectList.map((field) => (
                <CSS.CardFieldContent key={field.fieldName}>
                  <div>{`${field.fieldName} : `}</div>
                  <div>{` ${field.nowMemberCount} / ${field.fieldMaxNum}`}</div>
                </CSS.CardFieldContent>
              ))}
            </CSS.CardField>
          </CSS.CardContent>
          <CSS.buttonBoxHandler>
            <Button onClick={()=>detailOpen(item.sprintId)} type="positive">more</Button>
            </CSS.buttonBoxHandler>
            <CSS.heartBox>
            <IsLike data={item}/>
            </CSS.heartBox>
        </CSS.SprintBox>
        </CSS.contentBox>
      ))}
    </CSS.CardListsMain>

    </CSS.background>
  );
};

export default AllSprintList;
