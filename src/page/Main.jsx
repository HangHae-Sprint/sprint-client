import React, { useState } from "react";
import Header from "../components/Header";
import ContentBox from "../components/ContentBox";

const Main = () => {
  const [filterType, setFilterType] = useState("All");
  const cards = [
    {
      id: 1,
      type: "My Project",
      imageUrl: "https://via.placeholder.com/300x200.png?text=Project+1",
      title: "Project 1",
      description: "This is project 1",
    },
    {
      id: 2,
      type: "My Study",
      imageUrl: "https://via.placeholder.com/300x200.png?text=Study+1",
      title: "Study 1",
      description: "This is study 1",
    },
    {
      id: 3,
      type: "My Project",
      imageUrl: "https://via.placeholder.com/300x200.png?text=Project+2",
      title: "Project 2",
      description: "This is project 2",
    },
    {
      id: 4,
      type: "My Study",
      imageUrl: "https://via.placeholder.com/300x200.png?text=Study+2",
      title: "Study 2",
      description: "This is study 2",
    },
    {
      id: 5,
      type: "My Study",
      imageUrl: "https://via.placeholder.com/300x200.png?text=Study+2",
      title: "Study 2",
      description: "This is study 2",
    },
    {
      id: 6,
      type: "My Project",
      imageUrl: "https://via.placeholder.com/300x200.png?text=Project+2",
      title: "Project 2",
      description: "This is project 2",
    },
  ];

  const filteredCards =
    filterType === "All"
      ? cards
      : cards.filter((card) => card.type === filterType);

  return (
    <div>
      <Header setFilterType={setFilterType} />
      <div>
        <ContentBox cards={filteredCards} />
      </div>
    </div>
  );
};

export default Main;
