import { getFavorites, saveFavorites } from '@/lib/utils/localStorage';
import { Country } from '@/types/countriesAPI-type';

export const favoriteService = {

  getFavorites: (): Country[] => {
    try {
      return getFavorites();
    } catch (error) {
      console.error('Error getting favorites:', error);
      return [];
    }
  },

  addToFavorites: (country: Country): boolean => {
    try {
      const favorites = getFavorites();
      
      // Verificar si ya existe
      if (favorites.some((fav: Country) => fav.cca3 === country.cca3)) {
        return false;
      }
      
      const updatedFavorites = [...favorites, country];
      saveFavorites(updatedFavorites);
      return true;
    } catch (error) {
      console.error('Error adding to favorites:', error);
      return false;
    }
  },

  removeFromFavorites: (countryCode: string): boolean => {
    try {
      const favorites = getFavorites();
      const filteredFavorites = favorites.filter((fav: Country) => fav.cca3 !== countryCode);
      
      if (filteredFavorites.length === favorites.length) {
        return false; 
      }
      
      saveFavorites(filteredFavorites);
      return true;
    } catch (error) {
      console.error('Error removing from favorites:', error);
      return false;
    }
  },

  isFavorite: (countryCode: string): boolean => {
    try {
      const favorites = getFavorites();
      return favorites.some((fav: Country) => fav.cca3 === countryCode);
    } catch (error) {
      console.error('Error checking if favorite:', error);
      return false;
    }
  },

  clearAllFavorites: (): boolean => {
    try {
      saveFavorites([]);
      return true;
    } catch (error) {
      console.error('Error clearing favorites:', error);
      return false;
    }
  },

  getFavoritesCount: (): number => {
    try {
      const favorites = getFavorites();
      return favorites.length;
    } catch (error) {
      console.error('Error getting favorites count:', error);
      return 0;
    }
  },

  toggleFavorite: (country: Country): 'added' | 'removed' | 'error' => {
    try {
      if (favoriteService.isFavorite(country.cca3)) {
        const removed = favoriteService.removeFromFavorites(country.cca3);
        return removed ? 'removed' : 'error';
      } else {
        const added = favoriteService.addToFavorites(country);
        return added ? 'added' : 'error';
      }
    } catch (error) {
      console.error('Error toggling favorite:', error);
      return 'error';
    }
  }
};