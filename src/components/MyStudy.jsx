import { Button } from "./component/style";
import { useQuery } from "react-query";
import { myStudy } from "../axios/api";

import styled from "styled-components";

const MyStudy = () => {
  //API 연결
  const { isLoading, isError, data } = useQuery("myStudy", myStudy);
  // debugger;
  console.log(data);
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {Error.message}</div>;
  const cards = [
    {
      sprintId: 10,
      title: "Study1",
      nickname: "String",
      numLikes: 10,
      isLiked: true,
      createdAt: "LocalDateTime",
      modifiedAt: "LocalDateTime",
      sprintType: "Project",
      fieldObjectList: [
        {
          fieldName: "FE",
          fieldMemberCount: 3,
          fieldMaxNum: 5,
        },
        {
          fieldName: "BE",
          fieldMemberCount: 2,
          fieldMaxNum: 3,
        },
      ],
    },
    {
      sprintId: 11,
      title: "Study2",
      nickname: "String",
      numLikes: 10,
      isLiked: true,
      createdAt: "LocalDateTime",
      modifiedAt: "LocalDateTime",
      sprintType: "Project",
      fieldObjectList: [
        {
          fieldName: "FE",
          fieldMemberCount: 3,
          fieldMaxNum: 5,
        },
        {
          fieldName: "BE",
          fieldMemberCount: 2,
          fieldMaxNum: 4,
        },
      ],
    },
  ];

  return (
    <>
      <StCardList>
        {cards.map((card) => (
          <StCard key={card.sprintId}>
            <StCardTitle>{card.title}</StCardTitle>
            <StCardDescription>{card.description}</StCardDescription>
            <Button type="positive">more</Button>
          </StCard>
        ))}
      </StCardList>
    </>
  );
};

export default MyStudy;

const StContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const StFilterButtons = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;

  & > button {
    margin-right: 10px;
    background-color: #f5f5f5;
    border: none;
    padding: 8px 16px;
    cursor: pointer;
    border-radius: 5px;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #e0e0e0;
    }
  }
`;

const StCardList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const StCard = styled.div`
  width: 300px;
  margin: 20px;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const StCardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const StCardTitle = styled.h2`
  font-size: 24px;
  margin: 16px;
`;

const StCardDescription = styled.p`
  margin: 0 16px 16px;
  font-size: 16px;
  color: #666;
`;

const StCardButton = styled.button`
  background-color: #0066cc;
  color: white;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0052a3;
  }
`;
