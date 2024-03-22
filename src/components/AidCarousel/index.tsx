import React, { ReactElement } from 'react';
import Card from './components/Card';
import { ICardData } from '../../types';

interface AidCarouselProps {
  cards: ICardData[];
}

export default function AidCarousel({ cards }: AidCarouselProps): ReactElement {
  return (
    <>
      <h1>Les aides disponibles</h1>
      <div className="flex gap-4">
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
