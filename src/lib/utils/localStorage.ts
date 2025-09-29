import { Country } from "@/types/countriesAPI-type";

export const getFavorites = () => JSON.parse(localStorage.getItem('favorites') || '[]');
export const saveFavorites = (favorites: Country[]) => localStorage.setItem('favorites', JSON.stringify(favorites));

