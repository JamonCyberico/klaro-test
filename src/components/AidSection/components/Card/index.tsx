import React, { ReactElement } from 'react';
import { ISecondaryCardProps } from './types';
import BaseButton from '../../../BaseButton';

export default function Card({ title, illustrationSrc, buttonLabel }: ISecondaryCardProps): ReactElement {
  return (
    <div className="rounded-lg shadow-custom bg-white flex flex-col items-center justify-between p-2 h-[208px] min-w-[150px] sm:w-full">
      <div className="flex flex-col items-center justify-center gap-3 h-full">
        <p className="font-semibold text-sm leading-[18px] text-secondary">{title}</p>
        <div className='max-w-[100px] max-h-[100px] w-full h-full flex items-center justify-center'>
          <img className="object-contain w-full h-full" src={illustrationSrc} alt={title} />
        </div>
      </div>
      <BaseButton variant="hyperlink" onClick={() => console.log('Action performed')}>
        {buttonLabel}
      </BaseButton>
    </div>
  );
}
