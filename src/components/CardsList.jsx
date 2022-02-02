import React from 'react';
import { Link } from 'react-router-dom';

export default function CardsList({ cards }) {
  return (
    <div>
      <h1>hello this is cardslist</h1>
      {cards.map((card) => (
        <Link key={card._id} to={`/${card._id}`}>
          <h4>{card.englishName}</h4>
        </Link>
      ))}
    </div>
  );
}
