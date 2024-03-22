import React, { ReactElement } from 'react';

export default function NavBar(): ReactElement {
  return (
    <div className="px-[100px] fixed w-full bg-primary h-[60px] flex items-center justify-center md:justify-start rounded-b-lg md:rounded-none shadow-custom">
      <a className='text-white text-3xl px-6' href='/'>
        Klaro
      </a>
    </div>
  )
}
