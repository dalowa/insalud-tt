import { DisplayFavorites } from '@/components/DisplayFavorites';
import Link from 'next/link';
import React from 'react';

const Page = () => {
  return (
    <div className='font-sans flex flex-col min-h-screen pb-20 pt-10 gap-5 lg:gap-16'>
      <h1 className="text-4xl sm:text-6xl font-bold text-center"> Favorites Countries of the World</h1>
      <Link className="bg-green-400 py-3 px-6 w-44 text-center rounded-3xl font-bold mx-auto" href={"/"}>Go to Home</Link>
      <DisplayFavorites />
    </div>
  );
}

export default Page;

