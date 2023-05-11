import React from "react";
import { Link } from "react-router-dom";
import * as CSS from "../components/component/style";
import Header from "../components/Header";

const Home = () => {
  return (
    <>

    <Header/>
    <CSS.FontStyle>
      <Link to='/main'>
      <CSS.MainGo>스터디, 프로젝트 보러가기!</CSS.MainGo>
      </Link>
    <CSS.SprintMain>
    <CSS.RunningField>
    <CSS.SprintLine></CSS.SprintLine>
    <CSS.SprintLine></CSS.SprintLine>
    <CSS.SprintLine></CSS.SprintLine>
    <CSS.SprintLine></CSS.SprintLine>
    <CSS.SprintLine></CSS.SprintLine>
    <CSS.SprintLine></CSS.SprintLine>
    <CSS.SignIcon></CSS.SignIcon>
    </CSS.RunningField>
    <CSS.Uri></CSS.Uri>
    <CSS.CR1></CSS.CR1>
    <CSS.CR2></CSS.CR2>
    <CSS.CR3></CSS.CR3>
    <CSS.CR4></CSS.CR4>
    <CSS.CR5></CSS.CR5>
    </CSS.SprintMain>
    </CSS.FontStyle>
</>
  );
};

export default Home;
