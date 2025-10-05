import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Country } from '@/types/countriesAPI-type';
import { favoriteService } from '@/services/favoriteService';

interface FavoritesState {
  // Estado
  favorites: Country[];
  
  // Acciones
  loadFavorites: () => void;
  addToFavorites: (country: Country) => boolean;
  removeFromFavorites: (countryCode: string) => boolean;
  toggleFavorite: (country: Country) => 'added' | 'removed' | 'error';
  clearAllFavorites: () => void;
  isFavorite: (countryCode: string) => boolean;
  getFavoritesCount: () => number;
}

export const useFavoritesStore = create<FavoritesState>()(
  persist(
    (set, get) => ({
      // Estado inicial
      favorites: [],
      
      // Cargar favoritos desde localStorage
      loadFavorites: () => {
        const favorites = favoriteService.getFavorites();
        set({ favorites });
      },
      
      // Agregar a favoritos
      addToFavorites: (country: Country): boolean => {
        const success = favoriteService.addToFavorites(country);
        
        if (success) {
          const { favorites } = get();
          set({ favorites: [...favorites, country] });
        }
        
        return success;
      },
      
      // Remover de favoritos
      removeFromFavorites: (countryCode: string): boolean => {
        const success = favoriteService.removeFromFavorites(countryCode);
        
        if (success) {
          const { favorites } = get();
          set({ favorites: favorites.filter(fav => fav.cca3 !== countryCode) });
        }
        
        return success;
      },
      
      // Alternar favorito
      toggleFavorite: (country: Country): 'added' | 'removed' | 'error' => {
        const result = favoriteService.toggleFavorite(country);
        
        if (result === 'added') {
          const { favorites } = get();
          set({ favorites: [...favorites, country] });
        } else if (result === 'removed') {
          const { favorites } = get();
          set({ favorites: favorites.filter(fav => fav.cca3 !== country.cca3) });
        }
        
        return result;
      },
      
      // Limpiar todos los favoritos
      clearAllFavorites: () => {
        const success = favoriteService.clearAllFavorites();
        
        if (success) {
          set({ favorites: [] });
        }
      },
      
      // Verificar si es favorito (solo lectura del estado)
      isFavorite: (countryCode: string): boolean => {
        const { favorites } = get();
        return favorites.some(fav => fav.cca3 === countryCode);
      },
      
      // Obtener cantidad de favoritos
      getFavoritesCount: (): number => {
        const { favorites } = get();
        return favorites.length;
      }
    }),
    {
      name: 'favorites-storage',
      partialize: (state) => ({ 
        favorites: state.favorites 
      })
    }
  )
);