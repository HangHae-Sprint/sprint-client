import styled from "styled-components";
import Tenada from "../style/fonts/Tenada.ttf";

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
  background-color: ${(props) =>
    props.type === "positive" ? "#F0F0F0" : "#F8F4EA"};
  color: ${(props) => (props.type === "positive" ? "#3C486B" : "#243763")};
  padding: 10px;
  width: ${(props) => `${props.size}px;`};
  font-weight: 600;
  &:hover {
    background-color: ${(props) =>
      props.type === "positive" ? "#579BB1" : "#CE7777"};
    color: ${(props) => (props.type === "positive" ? "#F0F0F0" : "#F8F4EA")};
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
  margin-bottom: 30px;
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
  background-color: ${(props) =>
    props.type === "positive" ? "#F0F0F0" : "#F8F4EA"};
  color: ${(props) => (props.type === "positive" ? "#3C486B" : "#243763")};
  padding: 10px;
  width: 100px;
  font-weight: 600;
  &:hover {
    background-color: ${(props) =>
      props.type === "positive" ? "#579BB1" : "#CE7777"};
    color: ${(props) => (props.type === "positive" ? "#F0F0F0" : "#F8F4EA")};
    transform: scale(1.05);
    cursor: pointer;
  }
`;
