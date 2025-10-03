export interface CountryFiltersProps {
  inputSearch: string;
  setInputSearch: (value: string) => void;
  selectedRegion: string;
  setSelectedRegion: (value: string) => void;
  minPopulation: number;
  setMinPopulation: (value: number) => void;
  maxPopulation: number;
  setMaxPopulation: (value: number) => void;
}

export interface Icon {
  className: string;
}