// import axios from "axios";
// import { useState, useEffect } from "react";

// const MyFilter = () => {
//   const [cards, setCards] = useState([]);

//   useEffect(() => {
//     async function fetchCards() {
//       try {
//         const response = await axios.get(
//           `${process.env.REACT_APP_SERVER_URL}/sprints`
//         );
//         setCards(response.data);
//       } catch (error) {
//         throw new Error("데이터업로드 실패 ");
//       }
//     }
//     fetchCards();
//   }, []);

//   return (
//     <div>
//       {cards.map((card) => (
//         <div key={card.sprintId}>
//           <h2>{card.title}</h2>
//           <p>{card.nickname}</p>
//           <p>{card.numLikes}</p>
//           <p>{card.isLiked ? "Liked" : "Not Liked"}</p>
//           <p>{card.createdAt}</p>
//           <p>{card.modifiedAt}</p>
//           <p>{card.sprintType}</p>
//           <ul>
//             {card.fieldObjectList.map((field) => (
//               <li key={field.fieldName}>
//                 {field.fieldName} - {field.fieldMemberCount} /{" "}
//                 {field.fieldMaxNum}
//               </li>
//             ))}
//           </ul>
//           {card.commentList && (
//             <ul>
//               {card.commentList.map((comment) => (
//                 <li key={comment.id}>
//                   <p>{comment.username}</p>
//                   <p>{comment.nickname}</p>
//                   <p>{comment.comment}</p>
//                   <p>{comment.createdAt}</p>
//                   <p>{comment.modifiedAt}</p>
//                   <p>{comment.sprintType}</p>
//                   <p>{comment.numLikes}</p>
//                   <p>{comment.isLiked ? "Liked" : "Not Liked"}</p>
//                   <p>{comment.isMyComment ? "My Comment" : ""}</p>
//                 </li>
//               ))}
//             </ul>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default MyFilter;
