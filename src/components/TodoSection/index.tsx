import React, { ReactElement } from 'react';
import Card from './components/Card';
import { ITodoSectionProps } from './types';

export default function TodoSection({ cards, loading }: ITodoSectionProps): ReactElement {
  return (
    <div className='px-4 md:px-6 flex flex-col gap-8'>
      <h1 className='font-semibold text-base leading-6 text-secondary'>Bonjour Anthony, voici ce que vous pouvez faire aujourd'hui!</h1>
      <div className="flex flex-col gap-4 w-full px-1">
        {loading ? Array(2).fill(null).map((_, index) => (
          <div key={index} className="animate-pulse w-full rounded-lg h-[150px] bg-gray-300" />
        )) : cards.map((card) => (
          <Card
            key={card.id}
            title={card.title}
            illustrationSrc={card.illustrationSrc}
            buttonLabel={card.buttonLabel}
          />
        ))}
      </div>
    </div>
  );
}
