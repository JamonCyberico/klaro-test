import React, { ReactElement } from 'react';
import { IPrimaryCardProps } from './types';
import BaseButton from '../../../BaseButton';

export default function TodoCard({ title, illustrationSrc, buttonLabel }: IPrimaryCardProps): ReactElement {
  return (
    <div className="w-full flex items-center justify-between rounded-lg bg-white shadow-custom">
      <div className="px-4 flex flex-col justify-center">
        <div className="font-bold text-sm text-secondary">{title}</div>
        <BaseButton variant="hyperlink" onClick={() => console.log('Action performed')}>
          {buttonLabel}
        </BaseButton>
      </div>
      <img className="object-cover" src={illustrationSrc} alt={title} />
    </div>
  );
}
