'use client'

import React, { useEffect } from 'react'
import { CountryCard } from './country/CountryCard';
import { CountryModal } from './country';
import { useFavoritesStore } from '@/store/useFavoritesStore';
import { useCountriesStore } from '@/store';

export const DisplayFavorites = () => {
   const { favorites, loadFavorites, getFavoritesCount, clearAllFavorites } = useFavoritesStore();
   const { isModalOpen } = useCountriesStore();

   useEffect(() => {
      loadFavorites();
   }, [loadFavorites]);

   const handleClearAllFavorites = () => {
      const count = getFavoritesCount();
      if (count > 0 && confirm(`Are you sure you want to clear all ${count} favorites?`)) {
         clearAllFavorites();
      }
   };

  return (
   <>
    <div className='flex flex-col gap-4'>
      {/* Header with clear button */}
      {favorites.length > 0 && (
        <div className='flex md:flex-row md:justify-center md:mb-10 flex-col gap-4 justify-between items-center px-4'>
          <h2 className='text-lg font-semibold px-4 py-2 bg-white rounded-lg shadow-md'>
            {favorites.length} favorite{favorites.length !== 1 ? 's' : ''} found
          </h2>
          <button
            type='button'
            onClick={handleClearAllFavorites}
            className='bg-red-400 border shadow-gray-400 border-red-400 shadow-lg hover:bg-red-600 text-white px-4 py-2 rounded-lg font-bold transition-colors'
          >
            Clear All Favorites
          </button>
        </div>
      )}

      {/* Favorites Grid */}
      <div className='flex flex-wrap gap-4 justify-center'>
        {favorites.length === 0 ? (
          <div className='text-center py-8'>
            <p className='text-gray-500 text-lg'>No favorites added yet</p>
            <p className='text-gray-400 text-sm'>Start exploring countries and add them to your favorites!</p>
          </div>
        ) : (
          favorites.map((country, i) => (
            <CountryCard 
              country={country} 
              key={`${i}+${country.name.common}`} 
            />
          ))
        )}
      </div>
    </div>
    
    {isModalOpen && <CountryModal />}
   </>
  )
}
