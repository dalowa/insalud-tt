import { getFavorites, saveFavorites } from '@/lib/utils/localStorage';
import { Country } from '@/types/countriesAPI-type';

export const favoriteService = {
  getFavorites: (): Country[] => {
    return getFavorites();
  },

  addToFavorites: (country: Country): boolean => {
    const favorites = getFavorites();
    
    if (favorites.some((fav: Country) => fav.cca3 === country.cca3)) {
      return false;
    }
    
    favorites.push(country);
    saveFavorites(favorites);
    return true;
  },

  removeFromFavorites: (countryCode: string): boolean => {
    const favorites = getFavorites();
    const filteredFavorites = favorites.filter((fav: Country) => fav.cca3 !== countryCode);
    
    if (filteredFavorites.length === favorites.length) {
      return false; 
    }
    
    saveFavorites(filteredFavorites);
    return true;
  },

  isFavorite: (countryCode: string): boolean => {
    const favorites = getFavorites();
    return favorites.some((fav: Country) => fav.cca3 === countryCode);
  }
};