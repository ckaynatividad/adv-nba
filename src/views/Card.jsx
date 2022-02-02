import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import CardDetail from '../components/CardDetail';
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
    <div>
      <h1>hi</h1>
      <p>{card.englishName}</p>
      <img src={card.sakuraCard} />
    </div>
  );
}
