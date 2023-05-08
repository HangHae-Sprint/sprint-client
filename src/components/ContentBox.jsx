import React, { useState } from "react";
import styled from "styled-components";

const ContentBox = ({ cards }) => {
  const [filteredCards, setFilteredCards] = useState(cards);

  const handleFilter = (filterType) => {
    const filtered = cards.filter((card) => card.type === filterType);
    setFilteredCards(filtered);
  };

  return (
    <StContentContainer>
      <StFilterButtons>
        <button onClick={() => setFilteredCards(cards)}>All</button>
        <button onClick={() => handleFilter("type1")}>스터디</button>
        <button onClick={() => handleFilter("type2")}>프로젝트</button>
      </StFilterButtons>
      <StCardList>
        {filteredCards.map((card) => (
          <StCard key={card.id}>
            <StCardImage src={card.imageUrl} alt={card.title} />
            <StCardTitle>{card.title}</StCardTitle>
            <StCardDescription>{card.description}</StCardDescription>
            <StCardButton>상세보기</StCardButton>
          </StCard>
        ))}
      </StCardList>
    </StContentContainer>
  );
};

export default ContentBox;

const StContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const StFilterButtons = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;

  & > button {
    margin-right: 10px;
    background-color: #f5f5f5;
    border: none;
    padding: 8px 16px;
    cursor: pointer;
    border-radius: 5px;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #e0e0e0;
    }
  }
`;

const StCardList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const StCard = styled.div`
  width: 300px;
  margin: 20px;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const StCardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const StCardTitle = styled.h2`
  font-size: 24px;
  margin: 16px;
`;

const StCardDescription = styled.p`
  margin: 0 16px 16px;
  font-size: 16px;
  color: #666;
`;

const StCardButton = styled.button`
  background-color: #0066cc;
  color: white;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0052a3;
  }
`;
