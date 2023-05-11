import styled from "styled-components";
import Tenada from "../style/fonts/Tenada.ttf";
import LF from "../style/fonts/LF.ttf";
import heart from "../style/image/heart.png";
import beanHeart from "../style/image/beanHeart.png";
import homeIcon from "../style/image/homeIcon.png";
import signIcon from "../style/image/signIcon.png"
import uri from "../style/image/uri.png"
import cR1 from "../style/image/CR1.png"
import cR2 from "../style/image/CR2.png"
import cR3 from "../style/image/CR3.png"
import cR4 from "../style/image/CR4.png"
import cR5 from "../style/image/CR5.png"

export const FontStyle = styled.div`
  @font-face {
    text-align: center;
    font-family: 'LeferiPoint-WhiteObliqueA';
    src: url(${LF}) format("woff2");
  }
  font-family: 'LeferiPoint-WhiteObliqueA';
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
        return "transparent";
    }
  }};
  color: ${(props) => (props.type === "positive" ? "#3C486B" : "#243763")};
  padding: 10px;
  width: ${(props) => `${props.size}px;`};

  font-weight: 600;}
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

export const CommentInput = styled.input`
  background-color: transparent;
  border: none;
  border-bottom: 1px solid gray;
  white-space: pre-line;
  resize: none;
  width: 2000px;
  &:focus {
    outline: none;
  }
  
`;
export const CommentForm = styled.form`
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin: 20px;
`;
export const DetailTitle = styled.h1`
  width: 700px;
  padding: 20px;
  margin-bottom: 10px;
  margin-top: 20px;
  font-size: 27px;
  border-bottom: 1px solid gray;
`;
export const DetailContent = styled.div`
  width: 900px;
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
  width: 250px;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid gray;
  &:focus {
    outline: none;
  }
`;



export const CommentTitle = styled.h1`
  width: 800px;
  padding-bottom: 10px;
  font-size: 18px;
  padding-left:25px;
`;
export const CommentContent = styled.div`
  width: 800px;
  padding-bottom: 10px;
  border-bottom: 1px solid gray;
  color: #333333;
  padding-left:25px;

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
  @font-face {
    text-align: center;
    font-family: 'LeferiPoint-WhiteObliqueA';
    src: url(${LF}) format("woff2");
  }
  font-family: 'LeferiPoint-WhiteObliqueA';

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
  padding: 13px;
  display:flex;
  flex-direction:row;
  gap:15px;
  font-size:18px;
  margin:25px;
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


export const MenuBarTopContainer = styled.div`
  /* border: 1px solid black; */
  transform: translateX(0%) translateY(-78px);
`;

export const MenuBarContainer = styled.div`
  /* position: relative; */
  z-index: 100;
`;

export const HamburgerButton = styled.button`
  display: inline-block;
  z-index: ${(props) => props.zIndex || "auto"};
  background-color: transparent;
  border: none;
  cursor: pointer;
  position: absolute;
  top: 0;
  left: 0;
`;

export const HamburgerLine = styled.span`
  display: block;
  width: 25px;
  height: 3px;
  margin: 5px 0;
  background-color: #333;
`;

export const MenuBarDropdown = styled.div`
  position: fixed;
  /* margin-top: 130px; */
  top: 0;
  left: 0;
  width: 250px;
  height: 100%;
  border-radius: 5px;
  background-color: #fff;
  transform: translateX(-100%);
  transition: transform 0.3s ease;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3); /* 그림자 효과 */

  &.active {
    transform: translateX(0);
  }

  ${MenuBarContainer}.active & {
    display: block;
  }

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    position: absolute;
    top: 200px;
  }
  li {
    margin-bottom: 20px;
  }

  a {
    display: block;
    font-size: 16px;
    padding: 10px;
    text-decoration: none;
    color: #333;
    border-radius: 3px;
    transition: background-color 0.3s ease;
  }
  .btn-group {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;

    & > * {
      margin: 0 5px;
    }
  }
  footer{
    margin-top:800px;
  }
`;

//홈 아이콘
export const HomeIcon = styled.button`
background-image: url(${homeIcon});
width:60px;
height:60px;
background-size: cover;
background-color: transparent;
border:none;
cursor: pointer;
&:hover {
    transform: scale(1.2);
  }
`
export const HomeIconBox = styled.div`
position:absolute;
top:1.5rem;
right:3rem;
`
export const commentListBox = styled.div`
/* display:flex; */
/* justify-content:center; */
/* align-items:center; */
background-color:yellow;
width:1000px;
`
export const SprintMain = styled.div`
background-color:green;
width:100vw;
height:565px;
margin-top:160px;
position:relative;
padding-top:80px;
z-index:-1;
`
export const SprintLine = styled.div`
width:100vw;
height:80px;
border-bottom:1px solid black;
`
export const RunningField = styled.div`

background-color:red;
`

export const SignIcon = styled.div`
  background-image: url(${signIcon});
  width:100px;
  height:100px;
  background-size: cover;
  background-color: transparent;
  position:absolute;
  top:0;
  left:50%;
  `

//캐릭터
export const Uri = styled.div`
  background-image: url(${uri});
  width:100px;
  height:100px;
  background-size: cover;
  background-color: transparent;
  position:absolute;
  top:8%;
  left:0;
  `
export const CR1 = styled.div`
  background-image: url(${cR1});
  width:100px;
  height:150px;
  background-size: cover;
  background-color: transparent;
  position:absolute;
  top:20%;
  left:20%;
  `
export const CR2 = styled.div`
  background-image: url(${cR2});
  width:100px;
  height:120px;
  background-size: cover;
  background-color: transparent;
  position:absolute;
  top:65%;
  left:30%;
  `
export const CR3 = styled.div`
  background-image: url(${cR3});
  width:100px;
  height:100px;
  background-size: cover;
  background-color: transparent;
  position:absolute;
  top:30%;
  left:60%;
  `
export const CR4 = styled.div`
  background-image: url(${cR4});
  width:100px;
  height:110px;
  background-size: cover;
  background-color: transparent;
  position:absolute;
  top:40%;
  left:80%;
  `
export const CR5 = styled.div`
  background-image: url(${cR5});
  width:100px;
  height:130px;
  background-size: cover;
  background-color: transparent;
  position:absolute;
  top:50%;
  left:50%;
  `