import React, { ReactElement, useEffect, useState } from 'react';
import { ICardData } from '../../types';
import { fetchCards } from '../../services/api';
import TodoSection from '../../components/TodoSection';
import AidSection from '../../components/AidSection';

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
    <div className='bg-tertiary pt-[100px] pb-10 md:p-[100px] flex flex-col gap-10 h-full w-full'>
      <TodoSection cards={primaryCards} loading={loading} />
      <AidSection cards={secondaryCards} loading={loading} />
    </div>
  );
};
