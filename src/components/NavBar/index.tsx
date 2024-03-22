import React, { ReactElement } from 'react';

export default function NavBar(): ReactElement {
  return (
    <div className="flex w-full bg-blue-400 h-[60px] items-center justify-center">
      <p className='text-white text-3xl'>
        Klaro
      </p>
    </div>
  )
}
