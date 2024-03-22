import React, { ReactElement } from 'react';
import { ISecondaryCardProps } from './types';

export default function Card({ title, illustrationSrc, buttonLabel }: ISecondaryCardProps): ReactElement {
  return (
    <div className="rounded-lg shadow-lg bg-white">
      <img className="w-full" src={illustrationSrc} alt={title} />
      <div>
        <div className="font-bold text-xl">{title}</div>
        <button className="bg-blue-500 text-white">
          {buttonLabel}
        </button>
      </div>
    </div>
  );
}
