import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import { participateSprint } from "../axios/api";
import { Button } from "./component/style";
import * as CSS from './component/style';
import IsLike from "./IsLike";



const ParticipateSprint = () => {
  const navigate = useNavigate()
  //API 연결
  const { isLoading, isError, data } = useQuery("participateSprint", participateSprint);

  console.log(data);
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {Error.message}</div>;
  const detailOpen = (sprintId) =>{
    navigate(`/main/${sprintId}`)
  }
  


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



export default ParticipateSprint;

