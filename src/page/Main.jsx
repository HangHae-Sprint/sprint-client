import React, { useState } from "react";
import Header from "../components/Header";
import ContentBox from "../components/ContentBox";
import MyProject from "../components/MyProject";
import MyStudy from "../components/MyStudy";
import AllSprintList from "../components/AllSprintList";
import { useSelector } from "react-redux";

const Main = () => {
  const sprintType = useSelector((state) => state.sprint.sprintList);
  console.log("sprintType:", sprintType);
  // const [myStudy, setMyStudy] = useState(false);
  // const [myProject, setMyProject] = useState(false);

  // const filteredCards =
  //   filterType === "All"
  //     ? cards
  //     : cards.filter((card) => card.type === filterType);
  // const myProject = useSelector((state)=>{
  //   setSprintType(state.sprint.sprintList)

  // })

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
