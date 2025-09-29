import { useState } from 'react';
import { Country } from '@/types/countriesAPI-type';
import { countryService } from '@/services/countryService';

export const useCountryFilters = (countries: Country[]) => {
  const [inputSearch, setInputSearch] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("All");
  const [minPopulation, setMinPopulation] = useState(0);
  const [maxPopulation, setMaxPopulation] = useState(1000000000);

  const getFilteredCountries = () => {
    let filtered = countries;
    if (inputSearch.trim()) {
      filtered = countryService.searchCountries(filtered, inputSearch);
    }
    filtered = countryService.filterByRegion(filtered, selectedRegion);
    filtered = countryService.filterByPopulation(filtered, minPopulation, maxPopulation);
    return filtered;
  };

  return {
    inputSearch, setInputSearch,
    selectedRegion, setSelectedRegion,
    minPopulation, setMinPopulation,
    maxPopulation, setMaxPopulation,
    filteredCountries: getFilteredCountries()
  };
};