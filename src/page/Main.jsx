import React from "react";
import Header from "../components/Header";
import ContentBox from "../components/ContentBox";

const Main = () => {
  // 카드들의 데이터를 불러오는 코드
  const cards = [
    { id: 1, title: "카드 1", type: "type1" },
    { id: 2, title: "카드 2", type: "type2" },
    { id: 3, title: "카드 3", type: "type1" },
    { id: 4, title: "카드 4", type: "type2" },
    { id: 5, title: "카드 5", type: "type1" },
    { id: 6, title: "카드 6", type: "type2" },
    { id: 7, title: "카드 7", type: "type1" },
  ];
  return (
    <div>
      <Header />
      <div>Main</div>
      <ContentBox cards={cards} />
    </div>
  );
};

export default Main;
