import React from 'react';
import { Link } from 'react-router-dom';

export default function CardsList({ cards }) {
  return (
    <div>
      {cards.map((card) => (
        <Link key={card._id} to={`/${card._id}`}>
          <h4 id="title">{card.englishName}</h4>
        </Link>
      ))}
    </div>
  );
}
