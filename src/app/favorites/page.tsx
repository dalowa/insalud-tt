import { DisplayFavorites } from '@/components/DisplayFavorites';
import { HeaderTop } from '@/components/layout';
import React from 'react';

const PageFavorites = () => {
  return (
    <div className='font-sans flex flex-col min-h-screen max-w-[var(--max-w-container)] mx-auto gap-5 lg:gap-16'>
      <header className='px-3 py-5 flex flex-col w-full sm:px-5 max-w-[var(--max-w-container)] mx-auto'>
        <HeaderTop />
      </header>
      <DisplayFavorites />
    </div>
  );
}

export default PageFavorites;

