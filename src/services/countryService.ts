import { httpClientPlugin } from '@/lib/http-client.plugin';
import { API_ENDPOINTS } from '@/lib/constants/api';
import { Country } from '@/types/countriesAPI-type';

export const countryService = {
  getAllCountries: async (): Promise<Country[]> => {
    try {
      const countries = await httpClientPlugin.get(API_ENDPOINTS.COUNTRIES);
      return countries;
    } catch (error) {
      console.error('There is an error fetching countries:', error);
      throw new Error('Failed to fetch countries');
    }
  },

  searchCountries: (countries: Country[], searchTerm: string): Country[] => {
    return countries.filter(country => 
      country.name.common.includes(searchTerm.trim())
    );
  },

  filterByRegion: (countries: Country[], region: string): Country[] => {
    if (region === "All") return countries;
    return countries.filter(country => country.region === region);
  },

  filterByPopulation: (countries: Country[], min: number, max: number): Country[] => {
    return countries.filter(country => 
      country.population >= min && country.population <= max
    );
  }
};