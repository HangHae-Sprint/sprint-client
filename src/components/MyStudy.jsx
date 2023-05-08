import axios from "axios";
import { useEffect, useState } from "react";

const MyStudy = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_SERVER_URL}/api/cards?type=My%20Study`
        );
        setCards(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCards();
  }, []);

  return (
    <div>
      {cards.map((card) => (
        <div key={card.sprintId}>
          <div>{card.title}</div>
          <div>{card.nickname}</div>
          <div>{card.numLikes}</div>
          <div>{card.isLiked ? "Liked" : "Not Liked"}</div>
          <div>{card.createdAt}</div>
          <div>{card.modifiedAt}</div>
          <div>
            {card.fieldObjectList.map((fieldObject) => (
              <div key={fieldObject.fieldName}>
                <div>{fieldObject.fieldName}</div>
                <div>{fieldObject.fieldMemberCount}</div>
                <div>{fieldObject.fieldMaxNum}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyStudy;
