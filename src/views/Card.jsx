import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { getCardbyId } from '../services/cards';

export default function Card() {
  const [card, setCard] = useState([]);
  const params = useParams();
  console.log(params);

  useEffect(() => {
    const fetchData = async () => {
      const data = getCardbyId(params._id).then((data) => setCard(data));
      setCard(data);
    };
    fetchData();
  }, [params._id]);
  console.log(card);

  return (
    <div className="detail">
      <h1>{card.englishName}</h1>
      <img src={card.sakuraCard} />
      <p>Card #{card.cardNumber}</p>
      <p>Spanish Name: {card.spanishName}</p>
      <p>Kanji: {card.kanji}</p>
      <p>Meaning: {card.meaning}</p>

      <p>
        <NavLink to="/">back</NavLink>
      </p>
    </div>
  );
}
