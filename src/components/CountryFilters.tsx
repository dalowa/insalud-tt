import { PopulationRange } from './PopulationRange';
import { RegionSelect } from './RegionSelect';
import { SearchInput } from './SearchInput';

interface CountryFiltersProps {
  inputSearch: string;
  setInputSearch: (value: string) => void;
  selectedRegion: string;
  setSelectedRegion: (value: string) => void;
  minPopulation: number;
  setMinPopulation: (value: number) => void;
  maxPopulation: number;
  setMaxPopulation: (value: number) => void;
  onSearch: () => void;
}

export const CountryFilters = ({
    onSearch,
    inputSearch, 
    setInputSearch, 
    selectedRegion, 
    setSelectedRegion, 
    minPopulation, 
    setMinPopulation, 
    maxPopulation, 
    setMaxPopulation}: CountryFiltersProps) => {
  return (
      <div className='flex flex-col items-center lg:px-[10vw] gap-3 bg-black py-5 sm:flex-row sm:justify-center flex-wrap'>
        <SearchInput inputSearch={inputSearch} setInputSearch={setInputSearch} />
        <PopulationRange minPopulation={minPopulation} maxPopulation={maxPopulation} setMinPopulation={setMinPopulation} setMaxPopulation={setMaxPopulation} />
        <RegionSelect setSelectedRegion={setSelectedRegion} selectedRegion={selectedRegion} />
        <button type="button" onClick={() => onSearch()} className='text-3xl bg-white font-bold rounded-lg w-40 px-4 py-2' title='Search'>BUSCAR</button>
      </div>
  );
};