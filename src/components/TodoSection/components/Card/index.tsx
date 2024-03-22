import React, { ReactElement } from 'react';
import { IPrimaryCardProps } from './types';

export default function TodoCard({ title, illustrationSrc, buttonLabel }: IPrimaryCardProps): ReactElement {
  return (
    <div className="w-full rounded-lg bg-white">
      <img className="w-[175px] h-[175px]" src={illustrationSrc} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <button className="bg-blue-500 text-white">
          {buttonLabel}
        </button>
      </div>
    </div>
  );
}
