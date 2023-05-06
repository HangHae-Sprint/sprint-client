import styled from "styled-components";
import Tenada from "../style/fonts/Tenada.ttf";
import uri from "../style/image/uri.png";

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
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid gray;
  padding: 50px;
`;

//form
export const Form = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 30px;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  margin: 10px;
  width: 250px;
  padding: 10px;
`;

//Login
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
  display: flex;
  /* align-items:center; */
  justify-content: center;
  flex-direction: row;
`;
export const NumberOfApplicantsUl = styled.ul``;
export const NumberOfApplicantsLi = styled.li`
  padding: 12px;
`;
export const NumberOfApplicantsInput = styled.input`
  width: 20px;
  padding: 5px;
  margin: 5px;
`;
export const InputSection = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
