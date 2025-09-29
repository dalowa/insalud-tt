import { Country } from '@/types/countriesAPI-type'
import Image from 'next/image'
import React from 'react'

interface CountryModalProps {
  country:  Country
  setIsModalOpen: (b:boolean) => void
}

export const CountryModal = ({country, setIsModalOpen}: CountryModalProps) => {


  const addToFavorites = () => {

  const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
  if (!favorites.some((fav: Country) => fav.cca3 === country.cca3)) {
    favorites.push(country);
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }
};

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/35">
      <div className="relative bg-white rounded-2xl shadow-2xl w-80 max-w-sm p-6 text-gray-800 animate-scale-in">
        <button
          type='button'
          onClick={() => setIsModalOpen(false)}
          className="absolute top-3 right-3 text-gray-400 hover:text-red-500 text-2xl font-bold focus:outline-none"
          aria-label="Cerrar"
        >X
        </button>
        <button 
          type='button'
          className="absolute top-3 left-3 text-gray-400 hover:text-yellow-300 text-2xl font-bold focus:outline-none"
          onClick={addToFavorites}
          >Fav</button>
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
