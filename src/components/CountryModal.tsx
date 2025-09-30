import { favoriteService } from '@/services/favoriteService'
import { Country } from '@/types/countriesAPI-type'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { IconHeart } from './icons/IconHeart'
import { IconClose } from './icons/IconClose'

interface CountryModalProps {
  country:  Country
  setIsModalOpen: (b:boolean) => void
}

export const CountryModal = ({country, setIsModalOpen}: CountryModalProps) => {
const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    setIsFavorite(favoriteService.isFavorite(country.cca3));
  }, [country.cca3]);

  const handleToggleFavorite = () => {
    if (isFavorite) {
      favoriteService.removeFromFavorites(country.cca3);
      setIsFavorite(false);
    } else {
      favoriteService.addToFavorites(country);
      setIsFavorite(true);
    }
  };

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
          onClick={handleToggleFavorite}
          className={`absolute top-3 left-3 ${isFavorite ? 'text-yellow-500' : 'text-gray-400'}`}
        >
          <IconHeart className={`absolute top-3 left-3 w-8 h-8 hover:text-red-500 cursor-pointer text-4xl ${isFavorite ? 'text-red-500' : 'text-gray-400'}`} />
        </button>
        <div className="flex flex-col items-center py-10">
          <Image
            src={country.flags.png ?? country.flags.svg}
            alt={`Country flag of ${country.name.common}`}
            width={160}
            height={0o0}
            className="rounded shadow mb-4 w-auto h-auto"
          />
          <h2 className="text-xl text-center font-bold mb-2">{country.name.official}</h2>
          <div className="mb-1">
            <span className="font-semibold">Capital:</span>{" "}
            {country.capital?.[0] || "N/A"}
          </div>
          <div className="mb-1">
            <span className="font-semibold">Región:</span> {country.region}
          </div>
          <div className="mb-1">
            <span className="font-semibold">Población:</span>{" "}
            {country.population.toLocaleString()} personas
          </div>
        </div>
      </div>
    </div>
  );
};
