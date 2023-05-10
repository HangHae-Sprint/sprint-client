import React from "react";
import { useQuery } from "react-query";
import * as CSS from "../components/component/style";
import Header from "../components/Header";

const Home = () => {
  return (
    <>

    <Header/>
    <CSS.HomeTitle>여긴홈이라능~  </CSS.HomeTitle>
    </>
  );
};

export default Home;
