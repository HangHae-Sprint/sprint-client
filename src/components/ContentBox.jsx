import React, { useState } from "react";
import styled from "styled-components";

const ContentBox = ({ cards }) => {
  const [filteredCards, setFilteredCards] = useState(cards);

  const handleFilter = (filterType) => {
    const filtered = cards.filter((card) => card.type === filterType);
    setFilteredCards(filtered);
  };
  return (
    <StCardContainer>
      {filteredCards.map((card) => (
        <Card key={card.id} {...card} />
      ))}
      <button onClick={() => handleFilter("type1")}>Type 1</button>
      <button onClick={() => handleFilter("type2")}>Type 2</button>
      <button onClick={() => handleFilter("type1")}>Type 1</button>
      <button onClick={() => handleFilter("type2")}>Type 2</button>
    </StCardContainer>
  );
};

export default ContentBox;

const StCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  border: 1px solid black;
  padding: 10px;
`;

const Card = styled.div`
  width: calc(33.33% - 10px);
  margin-bottom: 20px;
  margin-right: 10px;
  background-color: white;
  border: 1px solid black;
  padding: 20px;
  box-sizing: border-box;
`;
