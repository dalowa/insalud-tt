'use client'

import Image from 'next/image'
import { IconHeart,IconClose} from '../icons';
import { useCountriesStore } from '@/store';
import { useFavoritesStore } from '@/store/useFavoritesStore';

export const CountryModal = () => {
const { currentModalCountry, setIsModalOpen } = useCountriesStore();
const { isFavorite, addToFavorites, removeFromFavorites } = useFavoritesStore();



  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/35">
      <div className="relative bg-white rounded-2xl shadow-2xl w-80 max-w-sm p-8 text-gray-800 animate-scale-in">
        <button
          type='button'
          onClick={() => setIsModalOpen(false)}
          className="absolute top-3 right-3 text-gray-400 hover:text-black cursor-pointer text-3xl font-bold focus:outline-none"
          aria-label="Cerrar"
        >
          <IconClose className='w-10 h-10'/>
        </button>
        <button
          title='favorite button' 
          onClick={() => {
            if (currentModalCountry) {
              if (isFavorite(currentModalCountry.cca3)) {
                removeFromFavorites(currentModalCountry.cca3);
              } else {
                addToFavorites(currentModalCountry);
              }
          }}}
          className={`absolute top-3 left-3 ${isFavorite(currentModalCountry?.cca3 as string) ? 'text-yellow-500' : 'text-gray-400'}`}
        >
          <IconHeart className={`absolute top-3 left-3 w-8 h-8 hover:text-red-500 cursor-pointer text-4xl ${isFavorite(currentModalCountry?.cca3 as string) ? 'text-red-500' : 'text-gray-400'}`} />
        </button>
        <div className="flex flex-col items-center py-10">
          <Image
            src={currentModalCountry?.flags.png ?? currentModalCountry?.flags.svg as string}
            alt={`Country flag of ${currentModalCountry?.name.common}`}
            width={160}
            height={0o0}
            className="rounded shadow mb-4 w-auto h-auto"
          />
          <h2 className="text-xl text-center font-bold mb-2">{currentModalCountry?.name.official}</h2>
          <div className="mb-1">
            <span className="font-semibold">Capital:</span>{" "}
            {currentModalCountry?.capital?.[0] || "N/A"}
          </div>
          <div className="mb-1">
            <span className="font-semibold">Región:</span> {currentModalCountry?.region}
          </div>
          <div className="mb-1">
            <span className="font-semibold">Población:</span>{" "}
            {currentModalCountry?.population.toLocaleString()} personas
          </div>
        </div>
      </div>
    </div>
  );
};
