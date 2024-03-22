import React, { ReactElement } from 'react';
import Card from './components/Card';
import { ICardData } from '../../types';

interface AidCarouselProps {
  cards: ICardData[];
}

export default function TodoSection({ cards }: AidCarouselProps): ReactElement {
  return (
    <>
      <h1>Bonjour Clément, voici ce que vous pouvez faire aujourd'hui!</h1>
      <div className="flex flex-col gap-4 w-full">
        {cards.map((card) => (
          <Card
            key={card.id}
            title={card.title}
            illustrationSrc={card.illustrationSrc}
            buttonLabel={card.buttonLabel}
          />
        ))}
      </div>
    </>
  )
}
