import { Country } from "./countriesAPI-type"

export interface CountriesState {
  // State
  allCountries: Country[]
  filteredCountries: Country[]
  loading: boolean
  error: string | null
  
  // Filters
  inputSearch: string
  selectedRegion: string
  minPopulation: number
  maxPopulation: number
  orderByCode: number
  selectedPopulationRange: string
  
  // Pagination
  currentPage: number
  itemsPerPage: number
  currentItems: Country[]
  totalPages: number
  
  // Modal
  currentModalCountry: Country | null
  isModalOpen: boolean
  
  // Actions
  fetchCountries: () => Promise<void>
  setInputSearch: (search: string) => void
  setSelectedRegion: (region: string) => void
  setMinPopulation: (min: number) => void
  setMaxPopulation: (max: number) => void
  setOrderByCode: (code: number) => void
  applyFilters: () => void
  setCurrentPage: (page: number) => void
  handleNext: () => void
  handlePrevious: () => void
  updateCurrentItems: () => void
  setCurrentModalCountry: (country: Country | null) => void
  setIsModalOpen: (isOpen: boolean) => void
  resetFilters: () => void
  setSelectedPopulationRange: (code: string) => void
}