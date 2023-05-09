import React from "react";
import { useQuery } from "react-query";
import * as CSS from "../components/component/style";
import Header from "../components/Header";

const Home = () => {
  return (
    <>
      <Header />
      <CSS.HomeTitle>여긴 홈이에여! </CSS.HomeTitle>
    </>
  );
};

export default Home;
