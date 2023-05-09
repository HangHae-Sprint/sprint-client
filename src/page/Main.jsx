import React, { useState } from "react";
import Header from "../components/Header";
import ContentBox from "../components/ContentBox";
import MyProject from "../components/MyProject";
import MyStudy from "../components/MyStudy";
import AllSprintList from "../components/AllSprintList";
import { useSelector } from "react-redux";

const Main = () => {
  const sprintType = useSelector((state) => state.sprint.sprintList);

  return (
    <div>
      <Header />
      {sprintType === "all" && <AllSprintList />}
      {sprintType === "project" && <MyProject />}
      {sprintType === "study" && <MyStudy />}
    </div>
  );
};

export default Main;
