import React from "react";
import { useSelector } from "react-redux";
import AllSprintList from "../components/AllSprintList";
import * as CSS from "../components/component/style";
import Header from "../components/Header";
import MyMakeSprint from "../components/MyMakeSprint";
import ParticipateSprint from "../components/ParticipateSprint";

const Main = () => {
  const sprintType = useSelector((state) => state.sprint.sprintList);

  return (
    <div>
      <Header />
    <CSS.FontStyle>
      
      {sprintType === "all" && <AllSprintList />}
      {sprintType === "MyMakeSprint" && <MyMakeSprint />}
      {sprintType === "ParticipateSprint" && <ParticipateSprint />}
    </CSS.FontStyle>

    </div>
  );
};

export default Main;
