import React from "react";
import Header from "./Header";
import ContentBox from "./ContentBox";

const MySprint = ({ cards }) => {
  cards = [
    {
      id: 1,
      type: "My Projects",
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
      type: "My Projects",
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
  ];
  return (
    <div>
      <Header />
      <div>
        <ContentBox cards={cards} />
      </div>
    </div>
  );
};

export default MySprint;
