import React, { useEffect, useState } from 'react';
import CardsList from '../components/CardsList';
import { getCards } from '../services/cards';

export default function Cards() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCards();
      setCards(data);
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Sakura CardCaptor Cards</h1>
      {loading && <h1>hold on...</h1>}
      {!loading && (
        <div className="cards">
          <CardsList cards={cards} />
        </div>
      )}
    </div>
  );
}
