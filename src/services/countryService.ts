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
    /* console.log(`Filter region being used and value is ${region}`) */
    if (region == "All" || region == "") return countries;
    else{
      return countries.filter(country => country.region === region);
    }
  },

  filterByPopulation: (countries: Country[], min: number, max: number): Country[] => {
    return countries.filter(country => 
      country.population >= min && country.population <= max
    );
  },
  filterByOrder: (countries: Country[], by: number): Country[] => {
    const sortedCountries = [...countries]; // Crear copia para no mutar el array original
    
    switch (by) {
      case 1: // Nombres A-Z
        return sortedCountries.sort((a, b) => 
          a.name.common.localeCompare(b.name.common)
        );
        
      case 2: // Nombres Z-A
        return sortedCountries.sort((a, b) => 
          b.name.common.localeCompare(a.name.common)
        );
        
      case 3: // Población ascendente (menor a mayor)
        return sortedCountries.sort((a, b) => 
          a.population - b.population
        );
        
      case 4: // Población descendente (mayor a menor)
        return sortedCountries.sort((a, b) => 
          b.population - a.population
        );
        
      default:
        return countries; // Sin orden específico
    }
  }

};