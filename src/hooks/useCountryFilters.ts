import { useState } from 'react';
import { Country } from '@/types/countriesAPI-type';

export const useCountryFilters = (countries: Country[]) => {
  const [inputSearch, setInputSearch] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("All");
  const [minPopulation, setMinPopulation] = useState(0);
  const [maxPopulation, setMaxPopulation] = useState(1000000000);

  const getFilteredCountries = () => {
    return countries
   .filter(c => c.name.common.toLowerCase().includes(inputSearch.toLowerCase().trim()))
   .filter(c => selectedRegion === "All" || c.region === selectedRegion)
   .filter(c => c.population >= minPopulation && c.population <= maxPopulation)
  };

  return {
    inputSearch, setInputSearch,
    selectedRegion, setSelectedRegion,
    minPopulation, setMinPopulation,
    maxPopulation, setMaxPopulation,
    filteredCountries: getFilteredCountries()
  };
};