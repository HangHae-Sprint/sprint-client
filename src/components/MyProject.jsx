// import styled from "styled-components";
// import { Button } from "./component/style";
// import { useNavigate } from "react-router-dom";
// import { useQuery } from "react-query";
// import { allSprint, myProject } from "../axios/api";
// import { useState } from "react";
// import Cookies from "js-cookie";
// import * as CSS from '../components/component/style'

// const MyProject = () => {
//   const navigate = useNavigate()
//   // const [isVisible, setIsVisible] = useState('')
//   //API 연결
//   const { isLoading, isError, data } = useQuery("myProject", myProject);
//   // debugger;

//   if (isLoading) return <div>Loading...</div>;
//   if (isError) return <div>Error: {Error.message}</div>;
//   const detailOpen = (sprintId) =>{

//     // if (!!Cookies.get('token')) {
//     //   alert('로그인이 필요합니다.')
//     //   return;
//     // }

//     navigate(`/main/${sprintId}`)
//   }

//   return (
//     <CSS.CardListsMain>
//     {data.map((item) => (
//       <CSS.SprintBox key={item.sprintId}>
//         <CSS.CardTitle>{item.title}</CSS.CardTitle>
//         <CSS.CardContent>
//           <div>{` ${item.nickname}`}</div>
//           <div>{` ${item.sprintType}`}</div>
//           <div>{`좋아요 ${item.numLikes}개`}</div>
//           <CSS.CardField>
//             <CSS.recruitment>모집인원:</CSS.recruitment>
//             {item.fieldObjectList.map((field) => (
//               <CSS.CardFieldContent key={field.fieldName}>
//                 <div>{`${field.fieldName} : `}</div>
//                 <div>{` ${field.nowMemberCount} / ${field.fieldMaxNum}`}</div>

//                 <CSS.CardFieldBar>
//                   <CSS.CardFieldBarFill
//                     fill={field.nowMemberCount}
//                     max={field.fieldMaxNum}
//                   />
//                 </CSS.CardFieldBar>
//               </CSS.CardFieldContent>
//             ))}
//           </CSS.CardField>
//         </CSS.CardContent>
//           <Button onClick={()=>detailOpen(item.sprintId)} type="positive">more</Button>
//       </CSS.SprintBox>
//     ))}
//   </CSS.CardListsMain>
//   );
// };

// export default MyProject;
