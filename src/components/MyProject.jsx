import styled from "styled-components";
import { Button } from "./component/style";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import { allSprint, myProject } from "../axios/api";
import { useState } from "react";
import Cookies from "js-cookie";
import * as CSS from "../components/component/style";

const AllSprintList = () => {
  const navigate = useNavigate();
  // const [isVisible, setIsVisible] = useState('')
  //API 연결
  const { isLoading, isError, data } = useQuery("myProject", myProject);
  // debugger;

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {Error.message}</div>;
  const detailOpen = (sprintId) => {
    // if (!!Cookies.get('token')) {
    //   alert('로그인이 필요합니다.')
    //   return;
    // }
    navigate(`/main/${sprintId}`);
  };

  return (
    <CSS.CardLists>
      {data.map((item) => (
        <CSS.Cards key={item.sprintId}>
          <CSS.CardTitles>{item.title}</CSS.CardTitles>
          <CSS.CardContent>
            <div>{` ${item.nickname}`}</div>
            <div>{` ${item.sprintType}`}</div>
            <div>{` ${item.numLikes}`}</div>
            <CSS.CardField>
              <CSS.CardFieldTitle>모집인원:</CSS.CardFieldTitle>
              {item.fieldObjectList.map((field) => (
                <CSS.CardFieldContent key={field.fieldName}>
                  <div>{`${field.fieldName}: `}</div>
                  <div>{`${field.nowMemberCount}/${field.fieldMaxNum}`}</div>

                  <CSS.CardFieldBar>
                    <CSS.CardFieldBarFill
                      fill={field.nowMemberCount}
                      max={field.fieldMaxNum}
                    />
                  </CSS.CardFieldBar>
                </CSS.CardFieldContent>
              ))}
            </CSS.CardField>
          </CSS.CardContent>

          {/* <Link to={`/main/${item.sprintId}`}> */}
          <Button onClick={() => detailOpen(item.sprintId)} type="positive">
            more
          </Button>
          {/* </Link> */}
        </CSS.Cards>
      ))}
    </CSS.CardLists>
  );
};

export default AllSprintList;
