import { create } from 'zustand'
import { Country } from '@/types/countriesAPI-type'
import { countryService } from '@/services/countryService'
import { CountriesState } from '@/types/stores-types'



export const useCountriesStore = create<CountriesState>((set, get) => ({
  // Initial State
  allCountries: [],
  filteredCountries: [],
  loading: false,
  error: null,
  
  // Filters
  inputSearch: '',
  selectedRegion: '',
  minPopulation: 0,
  maxPopulation: 1000000000,
  selectedPopulationRange: '',
  orderByCode: 0,
  
  // Pagination
  currentPage: 1,
  itemsPerPage: 9,
  currentItems: [],
  totalPages: 0,
  
  // Modal
  currentModalCountry: null,
  isModalOpen: false,
  
  // Actions
  fetchCountries: async () => {
    set({ loading: true, error: null })
    try {
      const countries = await countryService.getAllCountries()
      set({ 
        allCountries: countries, 
        filteredCountries: countries,
        loading: false 
      })
      get().updateCurrentItems()
    } catch (error) {
      set({ 
        error: `Error loading countries - ${error}`, 
        loading: false 
      })
    }
  },

  setInputSearch: (search: string) => {
    set({ inputSearch: search, currentPage: 1 })
    get().applyFilters()
  },

  setSelectedRegion: (region: string) => {
    set({ selectedRegion: region, currentPage: 1 })
    get().applyFilters()
  },

  setMinPopulation: (min: number) => {
    set({ minPopulation: min, currentPage: 1 })
    get().applyFilters()
  },

  setMaxPopulation: (max: number) => {
    set({ maxPopulation: max, currentPage: 1 })
    get().applyFilters()
  },
  setOrderByCode: (code: number) => {
    set({ orderByCode: code, currentPage: 1 })
    get().applyFilters()
  },
  setSelectedPopulationRange: (code: string) => {
    console.log('The code is', code)
    set({selectedPopulationRange: code})
  },

  applyFilters: () => {
    const { 
      inputSearch, 
      selectedRegion, 
      minPopulation, 
      maxPopulation,
      orderByCode 
    } = get()
    
    let filtered = get().allCountries;
    if (inputSearch.trim()) {
      filtered = countryService.searchCountries(filtered, inputSearch);
    }
    filtered = countryService.filterByRegion(filtered, selectedRegion);
    filtered = countryService.filterByPopulation(filtered, minPopulation, maxPopulation);
    filtered = countryService.filterByOrder(filtered, orderByCode)
    
    set({ filteredCountries: filtered })
    get().updateCurrentItems()
  },

  setCurrentPage: (page: number) => {
    set({ currentPage: page })
    get().updateCurrentItems()
  },

  handleNext: () => {
    const { currentPage, totalPages } = get()
    if (currentPage < totalPages) {
      get().setCurrentPage(currentPage + 1)
    }
  },

  handlePrevious: () => {
    const { currentPage } = get()
    if (currentPage > 1) {
      get().setCurrentPage(currentPage - 1)
    }
  },

  updateCurrentItems: () => {
    const { filteredCountries, currentPage, itemsPerPage } = get()
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    const currentItems = filteredCountries.slice(startIndex, endIndex)
    const totalPages = Math.ceil(filteredCountries.length / itemsPerPage)
    
    set({ currentItems, totalPages })
  },

  setCurrentModalCountry: (country: Country | null) => {
    set({ currentModalCountry: country })
  },

  setIsModalOpen: (isOpen: boolean) => {
    set({ isModalOpen: isOpen })
    if (!isOpen) {
      set({ currentModalCountry: null })
    }
  },

  resetFilters: () => {
    set({
      inputSearch: '',
      selectedRegion: '',
      selectedPopulationRange: '',
      minPopulation: 0,
      maxPopulation: 1000000000,
      currentPage: 1
    })
    get().applyFilters()
  }
}))