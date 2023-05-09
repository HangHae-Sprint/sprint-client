import styled from "styled-components";
import { Button } from "./component/style";
import Header from "./Header";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { allSprint } from "../axios/api";

const AllSprintList = () => {
  //API 연결
  const { isLoading, isError, data } = useQuery("allSprint", allSprint);
  // debugger;
  console.log(data);
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {Error.message}</div>;

  // const cards = [
  //   {
  //     sprintId: 10,
  //     title: "All",
  //     nickname: "All",
  //     numLikes: 10,
  //     isLiked: true,
  //     createdAt: "LocalDateTime",
  //     modifiedAt: "LocalDateTime",
  //     sprintType: "Project",
  //     fieldObjectList: [
  //       {
  //         fieldName: "FE",
  //         fieldMemberCount: 3,
  //         fieldMaxNum: 5,
  //       },
  //       {
  //         fieldName: "BE",
  //         fieldMemberCount: 2,
  //         fieldMaxNum: 3,
  //       },
  //     ],
  //   },
  //   {
  //     sprintId: 11,
  //     title: "All2",
  //     nickname: "All2",
  //     numLikes: 10,
  //     isLiked: true,
  //     createdAt: "LocalDateTime",
  //     modifiedAt: "LocalDateTime",
  //     sprintType: "Project",
  //     fieldObjectList: [
  //       {
  //         fieldName: "FE",
  //         fieldMemberCount: 3,
  //         fieldMaxNum: 5,
  //       },
  //       {
  //         fieldName: "BE",
  //         fieldMemberCount: 2,
  //         fieldMaxNum: 4,
  //       },
  //     ],
  //   },
  // ];

  return (
    <>
      <Header />
      <StCardLists>
        {data.map((item) => (
          <StCards key={item.sprintId}>
            <StCardTitles>{item.title}</StCardTitles>
            <StCardContent>
              <div>{` ${item.nickname}`}</div>
              <div>{` ${item.sprintType}`}</div>
              <div>{` ${item.numLikes}`}</div>
              <StCardField>
                <StCardFieldTitle>모집인원:</StCardFieldTitle>
                {item.fieldObjectList.map((field) => (
                  <StCardFieldContent key={field.fieldName}>
                    <div>{`${field.fieldName}: `}</div>
                    <div>{`${field.fieldMemberCount}/${field.fieldMaxNum}`}</div>

                    <StCardFieldBar>
                      <StCardFieldBarFill
                        fill={field.fieldMemberCount}
                        max={field.fieldMaxNum}
                      />
                    </StCardFieldBar>
                  </StCardFieldContent>
                ))}
              </StCardField>
            </StCardContent>

            <Link to="/detail">
              <Button type="positive">more</Button>
            </Link>
          </StCards>
        ))}
      </StCardLists>
    </>
  );
};

export default AllSprintList;
const StCardLists = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const StCards = styled.div`
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
  margin: 16px;
  width: 320px;
`;

const StCardTitles = styled.h2`
  font-size: 30px;
  font-weight: bold;
  margin: 0;
  padding: 16px;
`;

const StCardContent = styled.div`
  border-top: 1px solid #f0f0f0;
  padding: 16px;
`;

const StCardField = styled.div`
  color: #666;
  font-size: 14px;
  margin-bottom: 8px;
`;

const StCardFieldTitle = styled.div`
  font-weight: bold;
  margin-bottom: 4px;
`;

const StCardFieldContent = styled.div`
  display: flex;
  align-items: center;
`;

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
const StCardFieldBar = styled.div`
  background-color: #f0f0f0;
  border-radius: 4px;
  height: 4px;
  margin-left: 8px;
  margin-right: 4px;
  overflow: hidden;
`;

const StCardFieldBarFill = styled.div`
  background-color: #0070f3;
  border-radius: 4px;
  height: 4px;
  width: ${(props) =>
    props.fill ? `${(props.fill / props.max) * 100}%` : "0"};
`;

// const StCardList = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: center;
// `;

// const StCard = styled.div`
//   width: 300px;
//   margin: 20px;
//   background-color: white;
//   border: 1px solid #ccc;
//   border-radius: 5px;
//   box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
//   overflow: hidden;
// `;

// const StCardImage = styled.img`
//   width: 100%;
//   height: 200px;
//   object-fit: cover;
// `;
