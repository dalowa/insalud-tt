'use client'

import { IconHeart,IconClose} from '../icons';
import Image from 'next/image'
import { useCountriesStore } from '@/store';
import { useFavoritesStore } from '@/store/useFavoritesStore';
import { useEffect, useState } from 'react';

export const CountryModal = () => {

  const { currentModalCountry, setIsModalOpen } = useCountriesStore();
  const { isFavorite, toggleFavorite } = useFavoritesStore();
  const [isCurrentFavorite, setIsCurrentFavorite] = useState(false);

  // Sincronizar estado local con el store cuando cambie el país
  useEffect(() => {
    if (currentModalCountry) {
      setIsCurrentFavorite(isFavorite(currentModalCountry.cca3));
    }
  }, [currentModalCountry, isFavorite]);

  const handleFavoriteClick = () => {
    if (currentModalCountry) {
      const result = toggleFavorite(currentModalCountry);
      
      // Actualizar estado local inmediatamente para feedback visual
      if (result === 'added') {
        setIsCurrentFavorite(true);
      } else if (result === 'removed') {
        setIsCurrentFavorite(false);
      }
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/35">
      <div className='bg-white flex flex-col dark:bg-gray-800 rounded-lg shadow-lg w-[90%] min-h-80 p-4 relative max-w-80'>
        <div className='flex items-center justify-start gap-2'>
          <div className='w-14 h-10 relative rounded-lg overflow-hidden '>
            <Image 
            src={currentModalCountry?.flags.png as string}
            alt={currentModalCountry?.name.common as string}
            fill
            sizes='100%'
            className=""
            />
          </div>
          <div className='flex flex-col w-60'>
            <h3 className='font-black font-serif'>{currentModalCountry?.name.common.toLocaleUpperCase() as string}</h3>
            <h4 className='font-light font-serif'>{currentModalCountry?.name.official as string}</h4>
          </div>
        </div>

        <div>
          <div className='flex py-4'>
            <span className='w-[50%] cursor-pointer [&>div]:font-light [&>div]:text-sm [&>p]:font-semibold'>
              <div>{`Capital`}</div>
              <p>{currentModalCountry?.capital[0] || "None" as string}</p>
              <div>{`Population`}</div>
              <p>{currentModalCountry?.population as number}</p>
              <div>{`Region`}</div>
              <p>{currentModalCountry?.region as string}</p>
            </span>
            <div className='w-[50%] flex justify-center items-center'>
              <p className='text-3xl font-black tracking-widest font-sans'>{currentModalCountry?.cca3}</p>
            </div>
          </div>
        </div>

        <div className=' flex my-5'>
          <button 
            type='button' 
            title='Favorite' 
            className={`${isCurrentFavorite ? 'border-2 border-red-400 text-red-400' : 'bg-red-400 text-white'} cursor-pointer flex  px-5 py-2 gap-2 items-center justify-center rounded-lg mx-auto`}
            onClick={handleFavoriteClick}
          >
            <IconHeart className='w-4 h-4' />
            <p>{`${isCurrentFavorite ? 'Delete from favorites' : 'Add to Favorites'}`}</p>
          </button>
        </div>
        <button  className='absolute text-red-400 top-3 right-3 cursor-pointer' title='close' onClick={() => setIsModalOpen(false)}>
          <IconClose className='w-10 h-10 '  />
        </button>
      </div>
    </div>
  );
};
