import styled from "styled-components";
import Tenada from "../style/fonts/Tenada.ttf";
import heart from "../style/image/heart.png";
import beanHeart from "../style/image/beanHeart.png";

export const HomeTitle = styled.div`
  font-size: 20px;
`;

//Header
export const HeaderTitle = styled.h1`
  @font-face {
    text-align: center;
    font-family: "CustomFont";
    src: url(${Tenada}) format("woff2");
  }
  font-family: "CustomFont";
  font-size: 70px;
  padding: 20px;
  text-shadow: 2px 2px 2px white;
`;

export const Header = styled.header`
  text-align: center;
  margin-bottom: 10px;
  background-color: #f0a04b;
  position: relative;
`;

//button
export const Button = styled.button`
  border: none;
  border-radius: 8px;
  background-color: ${(props) => {
    switch (props.type) {
      case "positive":
        return "#F0F0F0";
      case "negative":
        return "#F8F4EA";
      default:
        return "transparent";
    }
  }};
  color: ${(props) => (props.type === "positive" ? "#3C486B" : "#243763")};
  padding: 10px;
  width: ${(props) => `${props.size}px;`};

  font-weight: 600;
  &:hover {
    background-color: ${(props) => {
      switch (props.type) {
        case "positive":
          return "#579BB1";
        case "negative":
          return "#CE7777";
        default:
          return "transparent";
      }
    }};
    color: ${(props) => {
      switch (props.type) {
        case "positive":
          return "#F0F0F0";
        case "negative":
          return "#F8F4EA";
        default:
          return "#CE7777";
      }
    }};
    transform: scale(1.05);
    cursor: pointer;
  }
`;

//Main
export const Main = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

//form
export const Form = styled.form`
  display: flex;
  font-size: 20px;
  /* align-items:center; */
  flex-direction: column;
  margin-top: 30px;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  margin: 10px;
  width: 250px;
  padding: 10px;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid gray;
  &:focus {
    outline: none;
  }
`;

//Login
export const LoginBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  border: 1px solid gray;
  width: 400px;
  height: 500px;
  margin-top: 100px;
`;

export const Title = styled.h1`
  font-size: 40px;
  font-weight: 600;
`;
export const Entire = styled.div`
  position: relative;
  border: none;
`;
export const WarningNotice = styled.div`
  color: red;
  font-size: 15px;
  margin-bottom: 10px;
`;

export const SignupGuide = styled.div`
  margin-top: 20px;
`;

//Editor
export const SupportAreas = styled.article`
  margin-top: 10px;
  display: flex;
  /* align-items:center; */
  justify-content: center;
  flex-direction: row;
  margin-bottom: 20px;
`;
export const NumberOfApplicantsUl = styled.ul``;
export const NumberOfApplicantsLi = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 180px;
`;
export const NumberOfApplicantsInput = styled.input`
  width: 20px;
  padding: 5px;
  text-align: center;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid gray;
  &:focus {
    outline: none;
    border: 1px solid gray;
    border-radius: 4px;
  }
`;
export const InputSection = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const EditorInput = styled.input`
  width: 800px;
  padding: 20px;
  margin-bottom: 20px;
  margin-top: 10px;
  background-color: transparent;
  border: 1px solid gray;
  border-radius: 8px;

  &:focus {
    outline: none;
    border: 1px solid gray;
    box-shadow: 3px 3px 2px black;
  }
`;

export const EditorTextarea = styled.textarea`
  width: 800px;
  height: 300px;
  padding: 20px;
  margin-bottom: 13px;
  margin-top: 10px;
  background-color: transparent;
  border: 1px solid gray;
  border-radius: 8px;
  white-space: pre-line;
  resize: none;
  &:focus {
    outline: none;
    border: 1px solid gray;
    box-shadow: 3px 3px 2px black;
  }
`;
export const SelectionType = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
export const CheckBox = styled.div`

display:flex;
gap:20px;
margin-bottom:15px;
`

export const UlBox = styled.ul`
  display: flex;
  font-size: 15px;
  flex-direction: column;
  gap: 7px;
`;
export const ButtonBox = styled.div`
  width: 320px;
  display: flex;
  justify-content: space-between;
  margin: 10px;
`;
export const Number = styled.section``;
export const NumberBox = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 5px;
  font-size: 15px;
`;
//detail
export const DetailButtonBox = styled.div`
  display: flex;
  gap: 20px;
`;
export const DetailSection = styled.section`
  display: flex;
  flex-direction: row;
`;

export const CommentInput = styled.textarea`
  background-color: transparent;
  border: none;
  border-bottom: 1px solid gray;
  white-space: pre-line;
  resize: none;

  &:focus {
    outline: none;
  }
  width: 720px;
`;
export const CommentForm = styled.form`
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin: 20px;
`;
export const DetailTitle = styled.h1`
  width: 600px;
  padding: 20px;
  margin-bottom: 10px;
  margin-top: 20px;
  font-size: 27px;
  border-bottom: 1px solid gray;
`;
export const DetailContent = styled.div`
  width: 800px;
  height: 300px;
  padding: 20px;
  margin-bottom: 20px;
  margin-top: 10px;
  border-bottom: 1px solid gray;
  font-size: 19px;
`;
//SupportStatus
export const Article = styled.article`
  display: flex;
  flex-direction: row;
  gap: 20px;
  font-size: 15px;
  margin-top: 20px;
`;
export const Section = styled.section`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;
export const ApplyButtonBox = styled.div`
  display: flex;
  align-items: center;
`;

export const BeanHeart = styled.button`
  background-image: url(${beanHeart});
  width: 35px;
  height: 35px;
  background-size: cover;
  background-color: transparent;
  border: none;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
  margin-left: 20px;
`;
export const Heart = styled.button`
  background-image: url(${heart});
  width: 35px;
  height: 35px;
  background-size: cover;
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin-left: 20px;
  &:hover {
    transform: scale(1.1);
  }
`;
export const Like = styled.div`
  display: flex;
  align-items: center;
`;
export const DetailLike = styled.div`
  display: flex;
  justify-content: space-between;
  width: 150px;
`;
export const DetailEdit = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
`;

//Comment
export const CommentButtonBox = styled.div`
  width: 320px;
  display: flex;
  justify-content: space-between;
  margin: 10px;
`;

export const CommentContentInput = styled.input`
  margin: 10px;
  width: 250px;
  padding: 10px;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid gray;
  &:focus {
    outline: none;
  }
`;

export const CommentButton = styled.button`
  border: none;
  border-radius: 8px;
  background-color: ${(props) => {
    switch (props.type) {
      case "positive":
        return "#F0F0F0";
      case "negative":
        return "#F8F4EA";
      default:
        return "transparent";
    }
  }};
  color: ${(props) => (props.type === "positive" ? "#3C486B" : "#243763")};
  padding: 10px;
  width: ${(props) => `${props.size}px;`};

  font-weight: 600;
  &:hover {
    background-color: ${(props) => {
      switch (props.type) {
        case "positive":
          return "#579BB1";
        case "negative":
          return "#CE7777";
        default:
          return "transparent";
      }
    }};
    color: ${(props) => {
      switch (props.type) {
        case "positive":
          return "#F0F0F0";
        case "negative":
          return "#F8F4EA";
        default:
          return "#CE7777";
      }
    }};
    transform: scale(1.05);
    cursor: pointer;
  }
`;

export const CommentTitle = styled.h1`
  width: 800px;
  padding-bottom: 10px;
  font-size: 18px;
`;
export const CommentContent = styled.div`
  width: 800px;
  padding-bottom: 10px;
  border-bottom: 1px solid gray;
  color: #333333;
`;
export const CommentBox = styled.div`
  padding-bottom: 20px;
`;
export const CommentSection = styled.section`
  margin: 20px;
  margin-top: 30px;
`;
//DetailModify
export const DetailModifyButtonBox = styled.div`
  display: flex;
  gap: 20px;
  justify-content: flex-end;
`;

//modal
export const ModalOverlay = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: fixed;
  background-color: rgba(49, 49, 49, 0.8);
  z-index: 10;
`;
export const ModalContent = styled.div`
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fefbe9;
  padding: 14px;
  border-radius: 10px;
  max-width: 600px;
  min-width: 300px;
  height: 300px;
  width: 500px;
  z-index: 9;
`;
export const ModalButton = styled.div`
  position: absolute;
  bottom: 14%;
  left: 12rem;
  display: flex;
  gap: 20px;
`;
export const Content = styled.form`

padding:20px;
display:flex;
flex-direction:column;
font-size:13px;
color:gray;
margin-top:50px;
`
export const ModalInput = styled.input`
margin-top:15px;
margin-bottom:20px;
width:400px;
padding:10px;
background-color:transparent;
border:none;
border-bottom:1px solid gray;
&:focus{
  outline:none;
}
`
//ApplyModal
export const PositionBox = styled.div`
font-size:20px;
`


//List(myStudy,MyProject,AllSprintList)
export const CardListsMain = styled.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  width:1400px;
`;

export const SprintBox = styled.article`
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.1);
  margin: 16px;
  width: 420px;
  height:280px;
  border-radius:8px;

`;

export const CardTitle = styled.h2`
  font-size: 27px;
  font-weight: bold;
  margin: 0;
  padding: 16px;
  border-bottom: 1px solid #f0f0f0;

`;

export const CardContent = styled.div`
  padding: 16px;
  display:flex;
  flex-direction:row;
  gap:40px;
  font-size:18px;
  margin:40px;
`;

export const CardField = styled.div`
  color: #666;
  font-size: 17px;
  margin-bottom: 8px;
`;

export const recruitment = styled.div`
  font-weight: bold;
  margin-bottom: 4px;
`;

export const CardFieldContent = styled.div`
  display: flex;
  align-items: center;
`;

// export const CardFieldBar = styled.div`
//   background-color: #f0f0f0;
//   border-radius: 4px;
//   height: 4px;
//   margin-left: 8px;
//   margin-right: 4px;
//   overflow: hidden;
// `;

// export const CardFieldBarFill = styled.div`
//   background-color: #0070f3;
//   border-radius: 4px;
//   height: 4px;
//   width: ${(props) =>
//     props.fill ? `${(props.fill / props.max) * 100}%` : "0"};
// `;
export const background = styled.div`
  display: flex;
  justify-content: center;
`;
export const buttonBoxHandler = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 2rem;
`;
export const contentBox = styled.div`
  display: flex;
  position: relative;
  &:hover {
    transform: scale(1.05);
  }

`
export const heartBox = styled.div`
position:absolute;
right:3rem;
bottom: 2rem;
`

