import React, { ReactElement, useEffect, useState } from 'react';
import AidCarousel from '../../components/AidCarousel';
import { ICardData } from '../../types';
import { fetchCards } from '../../services/api';
import TodoSection from '../../components/TodoSection';

export default function Home(): ReactElement {
  const [cards, setCards] = useState<ICardData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCards().then(data => {
      setCards(data);
      setLoading(false);
    }).catch(error => console.error(error));
  }, []);

  const primaryCards = cards.filter(card => card.type === 'primary');
  const secondaryCards = cards.filter(card => card.type === 'secondary');

  return (
    <div className='bg-blue-100 px-[100px] flex flex-col gap-20 h-screen'>
      {loading ? <p>Loading...</p> : (
        <>
          <TodoSection cards={primaryCards} />
          <AidCarousel cards={secondaryCards} />
        </>
      )}
    </div>
  );
};
