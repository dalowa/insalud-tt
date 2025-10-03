import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { Country } from '@/types/countriesAPI-type'
import { favoriteService } from '@/services/favoriteService'

interface FavoritesState {
  favorites: Country[]
  addToFavorites: (country: Country) => void
  removeFromFavorites: (countryCode: string) => void
  isFavorite: (countryCode: string) => boolean
  loadFavorites: () => void
}

export const useFavoritesStore = create<FavoritesState>()(
  persist(
    (set, get) => ({
      favorites: [],
      
      addToFavorites: (country: Country) => {
        const { favorites } = get()
        if (!favorites.find(fav => fav.cca3 === country.cca3)) {
          const newFavorites = [...favorites, country]
          set({ favorites: newFavorites })
          favoriteService.addToFavorites(country)
        }
      },
      
      removeFromFavorites: (countryCode: string) => {
        const { favorites } = get()
        const newFavorites = favorites.filter(fav => fav.cca3 !== countryCode)
        set({ favorites: newFavorites })
        favoriteService.removeFromFavorites(countryCode)
      },
      
      isFavorite: (countryCode: string) => {
        const { favorites } = get()
        return favorites.some(fav => fav.cca3 === countryCode)
      },
      
      loadFavorites: () => {
        const favorites = favoriteService.getFavorites()
        set({ favorites })
      }
    }),
    {
      name: 'favorites-storage',
      partialize: (state) => ({ favorites: state.favorites })
    }
  )
)