import React, { useRef, useState, useEffect, ReactElement } from 'react';
import Card from './components/Card';
import { ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/24/solid';
import { IAidSectionProps } from './types';

export default function AidSection({ cards, loading }: IAidSectionProps): ReactElement {
  const containerRef = useRef<HTMLDivElement>(null);

  const [isScrolledToLeft, setIsScrolledToLeft] = useState(true);
  const [isScrolledToRight, setIsScrolledToRight] = useState(false);

  const checkScrollPosition = () => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
      setIsScrolledToLeft(scrollLeft === 0);
      setIsScrolledToRight(scrollLeft + clientWidth === scrollWidth);
    }
  };

  const scrollToRight = () => {
    containerRef.current?.scrollBy({ left: containerRef.current.clientWidth, behavior: 'smooth' });
  };

  const scrollToLeft = () => {
    containerRef.current?.scrollBy({ left: -containerRef.current.clientWidth, behavior: 'smooth' });
  };

  useEffect(() => {
    checkScrollPosition();
  }, [cards]);

  return (
    <div className='md:px-6 flex flex-col gap-8 relative'>
      <h1 className='px-4 md:p-0 font-semibold text-base leading-6 text-secondary'>Les aides disponibles</h1>
      <div ref={containerRef} onScroll={checkScrollPosition} className="flex gap-4 md:grid md:grid-cols-3 md:gap-4 overflow-auto w-full h-full px-4 md:m-0 md:p-1 relative">
        {loading ? Array(3).fill(null).map((_, index) => (
          <div key={index} className="animate-pulse w-full rounded-lg h-[200px] bg-gray-300" />
        )) : cards.map((card) => (
          <Card
            key={card.id}
            title={card.title}
            illustrationSrc={card.illustrationSrc}
            buttonLabel={card.buttonLabel}
          />
        ))}
      </div>
      <div className='md:hidden absolute top-1/2 left-1/2 transform -translate-x-1/2 flex justify-between w-full px-1'>
        <div className='flex-1 flex justify-start'>
          {!isScrolledToLeft && (
            <div onClick={scrollToLeft} className='cursor-pointer rounded-3xl bg-blue-500 w-fit p-2'>
              <ChevronLeftIcon className="h-[20px] w-[20px] text-white" />
            </div>
          )}
        </div>
        <div className='flex-1 flex justify-end'>
          {!isScrolledToRight && (
            <div onClick={scrollToRight} className='cursor-pointer rounded-3xl bg-blue-500 w-fit p-2'>
              <ChevronRightIcon className="h-[20px] w-[20px] text-white" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
