import React, { ReactElement } from 'react';
import { IBaseButtonProps } from './types';

export default function BaseButton({ children, variant = 'default', onClick }: IBaseButtonProps): ReactElement {
  const baseStyles = 'py-2 rounded focus:outline-none transition ease-in-out duration-150';
  const defaultStyles = 'bg-primary text-white hover:bg-blue-600 px-4';
  const hyperlinkStyles = 'bg-transparent text-primary text-xs leading-[18px] font-semibold underline text-left hover:font-black';

  const buttonStyles = variant === 'hyperlink' ? `${baseStyles} ${hyperlinkStyles}` : `${baseStyles} ${defaultStyles}`;

  return (
    <button onClick={onClick} className={buttonStyles}>
      {children}
    </button>
  );
}
